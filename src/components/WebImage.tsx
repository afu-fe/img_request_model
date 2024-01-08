import { useEffect } from "react";
import { TImageInfo } from "../data/data";
import { useRequestLimit } from "./image/useRequestLimit";

// TODO useRequestModel
// 控制并发
// 记录每张图片的时间
// 全部请求完成后打印时间

export function WebImage(data: TImageInfo) {
  // domain config?
  // setQueue(data.url)
  // onQueueEnd(data.url, () => {
  //   setIsStarted(true)
  // })

  const { isStarted, updater } = useRequestLimit(data.url)

  useEffect(() => {
    updater.requestStart()

    return () => {
      updater.requestCancel()
    }
  }, [updater])

  if (!isStarted) {
    return <div>图片还在队列中</div>
  } else {
    console.log('render image', isStarted)
    return <img
      style={{maxWidth: '500px'}}
      src={data.url} alt="logo"
      onLoad={updater.requestSucceeded}
      onError={updater.requestFailed}
    />
  }
}

// import 'abortcontroller-polyfill';

// const AbortController = window.AbortController;
// const controller = new AbortController()
// const signal = controller.signal


// export function ImageExperiment() {
//   const config: TRequestLimitConfig[] = [
//     { type: 'domain', name: 'pic-a.autoimg.cn', limit: 20 },
//     { type: 'domain', name: 'pic-b.autoimg.cn', limit: 10 },
//     { type: 'domain', name: 'pic-c.autoimg.cn', limit: 5 },
//   ]
//   const initValue = { config, queue: {} }

//   // some value
//   return (
//     <RequestLimitContext.Provider value={initValue}>
//       <div>todo</div>
//     </RequestLimitContext.Provider>
//   )
// }

// export function CustomImage() {
//   const { isStarted, onLoadEnd } = useRequestLimit('https://pic-a.autoimg.cn/xxx.jpg')

//   if (!isStarted) {
//     return <div>图片还在队列中</div>
//   } else {
//     <img src="https://pic-a.autoimg.cn/xxx.jpg" alt="logo" onLoad={onLoadEnd}/>
//   }
// }