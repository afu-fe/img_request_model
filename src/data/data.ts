import dazhong from './dazhong.json'

console.log(dazhong)

type TImageInfo = {
  useH2: boolean;
  protocol: string;
  hostname: string;
  url: string;
  contentType: string;
  size: number;
}

function getImageData(): TImageInfo[] {
  const data: TImageInfo[] = []

  if (!Array.isArray(dazhong)) {
    throw new Error('dazhong is not Array')
  }
  
  dazhong.forEach(item => {
    if (!['pic-a.autoimg.cn', 'pic-b.autoimg.cn', 'pic-c.autoimg.cn'].includes(item.hostname)) {
      console.log('not target host', item)
      return
    } else {
      console.log('target host')
    }

    data.push({
      useH2: item.useH2, // item.req.httpVersion === '2.0', "1.1"
      protocol: item.protocol, // "H2", "HTTP"
      hostname: item.hostname, // item.req.headers.host,
      url: item.url,
      contentType: item.type, // item.res.headers['content-type'],
      size: item.res.size,
    }) 
  });

  return data 
}

export { getImageData }