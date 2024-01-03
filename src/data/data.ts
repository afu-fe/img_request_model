import dazhong from './dazhong.json'

console.log(dazhong)

type TData = {
  useH2: boolean;
  protocol: string;
  hostname: string;
  url: string;
  contentType: string;
  size: number;
}

const data: TData[] = []

if (!Array.isArray(dazhong)) {
  throw new Error('dazhong is not Array')
}

dazhong.forEach(item => {
  data.push({
    useH2: item.useH2,
    protocol: item.protocol,
    hostname: item.hostname,
    url: item.url,
    contentType: item.type,
    size: item.res.size,
  }) 
});

export { data }