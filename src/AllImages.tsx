import { WebImage } from './components/WebImage';
import { TImageInfo } from './data/data';
import dazhong1 from './data/dazhong1.json';
// import dazhong2 from './data/dazhong1.json';
// import dazhong3 from './data/dazhong1.json';


// TODO 实验控制参数
// 哪一组数据: dazhong1, dazhong2, dazhong3
// 哪一个实验组: 基线组, 实验A
export function AllImages() {
  const imgList = dazhong1 as TImageInfo[];

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