import { WebImage } from './components/WebImage';
import { TImageInfo } from './data/types';
import dazhong1 from './data/dazhong1.json';
import dazhong2 from './data/dazhong2.json';
import dazhong3 from './data/dazhong3.json';

function getImageData(num: number): TImageInfo[] {
  if (num === 1) {
    return dazhong1 as TImageInfo[];
  } else if (num === 2) {
    return dazhong2 as TImageInfo[];
  } else if (num === 3) {
    return dazhong3 as TImageInfo[];
  } else {
    throw new Error('num must be 1, 2, 3');
  }
}

// TODO 实验控制参数
// 哪一组数据: dazhong1, dazhong2, dazhong3
// 哪一个实验: 基线组, 实验A
const dataNo = 2;
const imgList = getImageData(dataNo);

export function AllImages() {
  return (
    <div>
      {
        imgList.map((item, index) => {
          return (
            <div key={index}>
              <WebImage {...item} />
            </div>
          )
        })
      }
    </div>
  );
}