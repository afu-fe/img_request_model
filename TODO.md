# 慢域名分析

如果被清理过缓存, z.autoimg.cn 会有额外 32 张图片请求

模拟数据
- 大众第一屏 82 张, 20条数据
  - 1 条, 商业找车魔盒
  - 5 条, 热点魔盒, 二手车魔盒, 品牌类精简_热门品牌魔盒, 大家都在搜魔盒, 车系论坛魔盒
  - 5 条, 活动权益魔盒, 车系视频魔盒 搜索2.0版本, 资讯魔盒 搜索2.0版本, 车系cps卡片, 魔盒_经销商,
  - 20 条, 之家百科魔盒, 19 条自然流
- 大众第二屏 12 张, 
- 大众第三屏 42 张, 20条数据
- 大众第三屏 40 张, 20条数据
- 大众第三屏 41 张, 20条数据

## 图片使用

### 原生部分

- Android-Universal-Image-Loader 开源图片加载框架
- Facebook Fresco 开源图片加载框架
- Glide 开源图片加载框架
- Photoview 开源图片库

### RN 部分

- [RN使用FastImage组件](https://zhishi.autohome.com.cn/home/teamplace/file?targetId=102269143)
- [RN使用Native图片加载控件API AHRNImageView](https://zhishi.autohome.com.cn/home/teamplace/file?targetId=84444457)
- ReactNative 自带 Image 组件
    - 默认情况下, Android 是不支持 GIF 和 WebP 格式的, 需要在 `android/app/build.gradle` 文件中手动添加对应模块
    - https://reactnative.cn/docs/images
- ReactNative 自带 ImageBackground 组件
    - 内部实现很简单, 其实就是基于 ReactNative 自带 Image 组件, 加上绝对定位, 实现了背景图片的效果
- 自行封装, 添加裁切, WebP, PNG, 倍图, 并发控制等支持