# 图片并发实验

## 基本介绍

加工好的三组数据
- `src/data/dazhong1.json`
- `src/data/dazhong2.json`
- `src/data/dazhong3.json`

实验说明
- 选择数据, 调整 `src/AllImages.tsx` 的 `dataNo` 变量即可
- 设置并发数, 调整 `src/components/useLimitedRequest.tsx` 的 `maxConcurrent` 变量即可
    - 5, 每个域名并发数为 5, 
    - 50, 每个域名并发数为 50, 意味着全量请求

## 测试方法

第一步, 修改对应变量

第二步, 运行程序, 进行图片请求

第三步, 查看控制台输出结果, `imageMeasures`, 正常情况下应该有 100 条数据, 将其复制到 `src/data/` 的对应文件中, 比如 `dazhong1_Base_1.json` 中

第四步, 运行程序, 查看控制台输出结果, 查看 `dazhong1_Base_Middle` 相关内容