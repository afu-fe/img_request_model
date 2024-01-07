import { TImageInfo } from "../data/data";
import { useRequestLimit } from "./image/useRequestLimit";

// TODO useRequestModel
// 控制并发
// 记录每张图片的时间
// 全部请求完成后打印时间
export function WebImage(data: TImageInfo) {
  // domain config?
  // setQueue(data.url)
  // onQueueEnd(data.url, () => {})

  const { isStarted, onLoadEnd } = useRequestLimit(data.url)

  if (!isStarted) {
    return <div>图片还在队列中</div>
  } else {
    <img src={data.url} alt="logo" onLoad={onLoadEnd}/>
  }
}