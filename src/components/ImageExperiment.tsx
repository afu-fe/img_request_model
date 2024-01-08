import { createContext } from "react";

type TMeasureData = {
  url: string;
  size?: number;
}

export const ImageExpirement = createContext(null)

type TImageExperiment = {
  imgList: TMeasureData[];
}
export function createImageExperiment(config: TImageExperiment) {
  return {
    imgList: config.imgList,
  }
}

export function ImageExperimentProvider({ children, experiement }) {
  return (
    <ImageExpirement.Provider value={experiement}>
      {children}
    </ImageExpirement.Provider>
  )
}