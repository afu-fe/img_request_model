import { useEffect } from "react";
import { TImageInfo } from "../data/types";
import { useLimitedRequest } from "./useLimitedRequest";

export function WebImage(data: TImageInfo) {
  const { isStarted, updater } = useLimitedRequest(data.url)

  useEffect(() => {
    updater.requestStart()

    return () => {
      updater.requestCancel()
    }
  }, [updater])

  if (!isStarted) {
    return <div>图片还在队列中</div>
  } else {
    return <img
      style={{maxWidth: '500px'}}
      src={data.url} alt="logo"
      onLoad={updater.requestSucceeded}
      onError={updater.requestFailed}
    />
  }
}
