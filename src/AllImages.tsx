// import { ImageExpirement } from './components/ImageExperiment';
import { WebImage } from './components/WebImage';
import { TImageInfo } from './data/generagteData';
// import dazhongData from './data/dazhong1.json';
import dazhongData from './data/dazhong2.json';
// import dazhongData from './data/dazhong3.json';

import { ImageExperimentProvider, createImageExperiment } from './experiment';

// TODO 实验控制参数
// 哪一组数据: dazhong1, dazhong2, dazhong3
// 哪一个实验组: 基线组, 实验A

const imageExperiment = createImageExperiment({
  imgList: dazhongData as TImageInfo[],
})

export function AllImages() {
  const imgList = dazhongData as TImageInfo[];

  return (
    <ImageExperimentProvider experiement={imageExperiment}>
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
    </ImageExperimentProvider>
  );
}