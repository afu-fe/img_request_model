import dazhong from './dazhong.json'
import type { TSourceInfo, TImageInfo } from './types';
import { getRandomInt, shuffle } from './utils';

// 生成图片数据, 需满足如下条件
// 1. 随机选择一个 host, 大体满足各 1/3 的概率
// 2. 一律使用 https 协议, 以保证发出 H2 请求
// 3. 大图小图均有
export function generateImageData(source: TSourceInfo[]): TImageInfo[] {
  const data: TImageInfo[] = []

  if (!Array.isArray(source)) {
    throw new Error('source is not Array')
  }

  source.forEach(item => {
    const hostnames = ['pic-a.autoimg.cn', 'pic-b.autoimg.cn', 'pic-c.autoimg.cn']

    if (!hostnames.includes(item.hostname)) {
      console.warn('not target host', item)
      return
    }

    if (!item.path || item.path.length <= 0) {
      console.warn('path empty', item);
      return
    }

    const random = getRandomInt(0, 2)
    const hostname = hostnames[random]

    if (data.length >= 100) {
      return false
    }

    data.push({
      hostname: hostname, // item.req.headers.host,
      url: `https://${hostname}${item.path}`,
      path: item.path,
      contentType: item.type, // item.res.headers['content-type'],
      size: item.res.size,
    }) 
  });

  return data 
}

const data = generateImageData(dazhong as TSourceInfo[])

// 打乱顺序
shuffle(data)

console.log('generateImageData', data)
