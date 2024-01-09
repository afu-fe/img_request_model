// https://doc.autohome.com.cn/docapi/page/share/share_rD6JIxt1V2

import { AHRNImageView } from "./AHRNImageView"
import { useLimitedRequest } from "./useLimitedRequest";

// 二次封装, 处理裁切等需求

type AutoRnImageProps = {
  imgUrl: string;
  defaultImgUrl?: string;
}

export function AutoRnImage(props: AutoRnImageProps) {
  const { isStarted } = useLimitedRequest(props.imgUrl)

  if (isStarted) {
    return (
      <AHRNImageView
        data={{ uri: props.imgUrl, defaultUri: props.defaultImgUrl }}
        resizeMode="cover"
      />
    )
  } else {
    return <div>图片还在队列中</div>
  }

}
