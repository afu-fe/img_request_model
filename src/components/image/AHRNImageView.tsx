// RN 使用 Native 图片加载控件 API
// https://zhishi.autohome.com.cn/home/teamplace/file?targetId=84444457
// http://wiki.corpautohome.com/pages/viewpage.action?pageId=84444457

type AHRNImageViewProps = {
  data: {
    uri: string;
    defaultUri?: string;
    // isCircle?: boolean;
    // capInsets?: 支持iOS使用9patch图，用于表示缩放区域
    // ext?: 不确定用途
    // isNoResize?: boolean 加载图片是否压缩；默认false压缩
    // fadeDurationMs?: number fade持续时间毫秒, 
  }
  // https://reactnative.cn/docs/image#resizemode
  resizeMode?: string;
  // onLoadError 错误回调
  // onLoadComplete 加载成功回调
  // ext 业务扩展字段
  // picUrlExtraInfo 业务扩展字段
}

export function AHRNImageView(props: AHRNImageViewProps) {
  console.log(props)

  return (
    <img src={props.data.uri} />
  )
}