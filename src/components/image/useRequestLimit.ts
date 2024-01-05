import { useEffect, useState } from "react";

const store = {
  queue: {
    'pic-a.autoimg.cn': [{ key: 'https://pic-a.autoimg.cn/xxx.jpg', cb: () => {} }],
    'pic-b.autoimg.cn': [{ key: 'https://pic-b.autoimg.cn/xxx.jpg', cb: () => {} }],
    'pic-c.autoimg.cn': [{ key: 'https://pic-c.autoimg.cn/xxx.jpg', cb: () => {} }],
  },
  config: [
    { type: 'domain', name: 'pic-a.autoimg.cn', limit: 20 },
    { type: 'domain', name: 'pic-b.autoimg.cn', limit: 10 },
    { type: 'domain', name: 'pic-c.autoimg.cn', limit: 5 },
  ],
}

type TQueueItem = {
  key: string;
  cb: () => void;
}

function onLoadStart(url: string, cb: () => void) {
  const domain = url.split('/')[2]
  const queue = (store.queue as Record<string, TQueueItem[]>)[domain]
  const config = store.config.find(item => item.name === domain)

  if (config && queue.length >= config.limit) {
    queue.push({ key: url, cb })
  } else {
    // 可以直接触发
    // setTimeout(() => cb(), 0)
    cb()
  }
}

function handleQueue() {
  const queue = store.queue as Record<string, TQueueItem[]>
  const config = store.config

  config.forEach(item => {
    const { name, limit } = item
    const queueItem = queue[name]

    if (queueItem.length >= limit) {
      const { key, cb } = queueItem.shift() as TQueueItem
      // setTimeout(() => cb(), 0)
      cb()
    }
  })

}

export function useRequestLimit(url: string) {
  // 当前图片进入队列时间
  // 当前图片请求开始时间, 当前图片请求结束时间

  const [state, setState] = useState(false)

  useEffect(() => {
    onLoadStart(url, () => {
      setState(true)
    })

    return () => {
      // offLoadStart
    }
  }, [url])

  return {
    state,
  }
}