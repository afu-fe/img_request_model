// https://doc.autohome.com.cn/docapi/page/share/share_rD6JIxt1V2

import { AHRNImageView } from "./AHRNImageView"
import { useRequestLimit } from "./useRequestLimit";

// 二次封装, 处理裁切等需求

type AutoRnImageProps = {
  imgUrl: string;
  defaultImgUrl?: string;
}


export function AutoRnImage(props: AutoRnImageProps) {
  const { state } = useRequestLimit(props.imgUrl)

  if (state) {
    console.log('图片开始请求了')
    return (
      <AHRNImageView
        data={{ uri: props.imgUrl, defaultUri: props.defaultImgUrl }}
        resizeMode="cover"
      />
    )
  } else {
    console.log('图片还在队列中')
    return <div>图片还在队列中</div>
  }

}
