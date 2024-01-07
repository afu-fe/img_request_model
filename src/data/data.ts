import dazhong from './dazhong.json'

export type TImageInfo = {
  hostname: string;
  url: string;
  path: string;
  contentType: string;
  size: number;
}

export function getImageData(): TImageInfo[] {
  const data: TImageInfo[] = []

  if (!Array.isArray(dazhong)) {
    throw new Error('dazhong is not Array')
  }

  
  dazhong.forEach(item => {
    const hostnames = ['pic-a.autoimg.cn', 'pic-b.autoimg.cn', 'pic-c.autoimg.cn']

    if (!hostnames.includes(item.hostname)) {
      console.warn('not target host', item)
      return
    }

    if (!item.path || item.path.length <= 0) {
      console.warn('path empty', item);
      return
    }

    shuffle(hostnames)
    const hostname = hostnames[0]

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

export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
