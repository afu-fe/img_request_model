import { useMemo, useState } from "react";

type TQueueItem = {
  requestId: string;
  cb: () => void;
  // promise: Promise<unknown>;
  // resolve: (value: unknown) => void;
  // reject: () => void;
}

type TQueueInfo = {
  max: number;
  current: number;
  name: string;
  queue: TQueueItem[];
  processing: boolean;
}

const queueStore: Record<TQueueInfo['name'], TQueueInfo> = {}

export function createRequestQueue(name: string, max: number) {
  // 初次创建队列
  if (!queueStore[name]) {
    queueStore[name] = {
      max,
      current: 0,
      name,
      queue: [],
      processing: false,
    }
  }

  const queueInfo = queueStore[name]

  const pushRequest = (requestId: string, cb: () => void) => {
    queueInfo.queue.push({
      requestId,
      cb,
      // promise,
      // resolve,
      // reject,
    })

    if (!queueInfo.processing) {
      queueInfo.processing = true
      setTimeout(() => {
        processQueue()
      }, 0);
    }
  }

  const processQueue = () => {
    // 当前处理的请求数量小于最大请求数量 && 存在待处理的请求
    while(queueInfo.current < queueInfo.max && queueInfo.queue.length > 0) {
      const item = queueInfo.queue.shift();
      if (item) {
        
        // TODO 通知外部, 触发请求开始
        if (typeof item.cb === 'function') {
          item.cb()
        }
        // TODO 当 item 处理完毕后(成功或失败), current - 1

        queueInfo.current += 1
      }
    }

    // TODO 一定时间后再次检查队列, 也许有更好的办法?
    // queueInfo.processing = false
    setTimeout(() => {
      processQueue()
    }, 10);
  }

  const finishRequest = (requestId: string) => {
    requestId

    queueInfo.current -= 1

    // TODO 是否启动下一次请求
    // if (!queueInfo.processing) {
    //   queueInfo.processing = true
    //   setTimeout(() => {
    //     processQueue()
    //   }, 0);
    // }
  }

  const removeRequest = (requestId: string) => {
    queueInfo.queue.some((item, index) => {
      if (item.requestId === requestId) {
        queueInfo.queue.splice(index, 1)
        return true
      }
    })

    // TODO 是否移除在处理中请求
  }

  return {
    pushRequest,
    processQueue,
    finishRequest,
    removeRequest,
  }
}

const maxConcurrent = 5
const picAQueue = createRequestQueue('pic-a.autoimg.cn', maxConcurrent)
const picBQueue = createRequestQueue('pic-b.autoimg.cn', maxConcurrent)
const picCQueue = createRequestQueue('pic-c.autoimg.cn', maxConcurrent)

function getRequestQueue(url: string): ReturnType<typeof createRequestQueue> | null {
  const domain = url.split('/')[2]
  if (domain === 'pic-a.autoimg.cn') {
    return picAQueue
  } else if (domain === 'pic-b.autoimg.cn') {
    return picBQueue
  } else if (domain === 'pic-c.autoimg.cn') {
    return picCQueue
  } else {
    return null
  }
}

type TImageMeasureData = {
  url: string;
  size?: number;
  queueTime?: number;
  startTime?: number;
  endTime?: number;
}
const imageMeasures: TImageMeasureData[] = [];

// TODO useRequestController
// 控制并发
// 记录每张图片的时间
// 全部请求完成后打印时间

export function useLimitedRequest(url: string) {
  const [isStarted, setIsStarted] = useState(false)

  const updater = useMemo(() => {
    const queue = getRequestQueue(url)
    const measureData: TImageMeasureData = { url }

    const handleRequestStart = () => {
      // TODO 这个 startTime 是否能够准确表达图片开始请求的时间
      // 当前图片请求开始时间
      measureData.startTime = Date.now()

      console.log('requestStarted')
      setIsStarted(true)
    }

    const requestStart = () => {
      // 没有队列, 直接开始请求
      if (!queue) {
        handleRequestStart()
        return
      }

      // 当前图片请求入队列时间
      measureData.queueTime = Date.now()

      console.log('requestQueue')
      queue?.pushRequest(url, handleRequestStart)
    }

    const requestSucceeded = () => {
      // 当前图片请求成功时间
      measureData.endTime = Date.now()
      imageMeasures.push(measureData)

      // TODO 暂时用这种办法打印
      if (imageMeasures.length === 100) {
        console.log(imageMeasures)
      }

      console.log('requestSucceeded')
      queue?.finishRequest(url)
    }
  
    const requestFailed = () => {
      console.warn('requestFailed')
      queue?.finishRequest(url)
    }

    const requestCancel = () => {
      console.warn('requestCancel')
      queue?.removeRequest(url)
      // TODO ? queue?.finishRequest(url)
    }

    return {
      requestStart,
      requestSucceeded,
      requestFailed,
      requestCancel,
    }
  }, [url])

  return {
    isStarted,
    updater,
  }
}