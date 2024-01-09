export type TSourceInfo = {
  hostname: string;
  path: string;
  type: string;
  res: {
    size: number;
  }
}

export type TImageInfo = {
  hostname: string;
  url: string;
  path: string;
  contentType: string;
  size: number;
}

export type TMeasureData = {
  url: string;
  queueTime?: number;
  startTime: number;
  endTime: number;
}