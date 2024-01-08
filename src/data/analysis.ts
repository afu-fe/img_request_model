import dazhong1 from './dazhong1.json'
import dazhong1_A_1 from './dazhong1-A-1.json'
import dazhong1_A_2 from './dazhong1-A-2.json'
import dazhong1_A_3 from './dazhong1-A-3.json'
import dazhong1_Base_1 from './dazhong1-Base-1.json'
import dazhong1_Base_2 from './dazhong1-Base-2.json'
import dazhong1_Base_3 from './dazhong1-Base-3.json'

import { TImageInfo } from './data'

type TMeasureData = {
  url: string;
  queueTime?: number;
  startTime: number;
  endTime: number;
}

function caculate(base: TImageInfo[], data: TMeasureData[][], isAverage = false) {
  const result: number[] = []

  for (let i = 0; i < base.length; i++) {
    // 计算每一组的平均值
    const baseItem = base[i]
    const costArray: number[] = []
    data.forEach((group) => {
      const item = group.find((item) => {
        if (item.url === baseItem.url) {
          return true
        }
      })
      if (item) {
        const cost = item.endTime - item.startTime
        costArray.push(cost)
      }
    })
    const averageCost = getAverageNumber(costArray)

    result.push(averageCost)
  }

  if (isAverage) {
    return getAverageNumber(result)
  } else {
    return getMiddleNumber(result)
  }

}

const dazhong1_A_Middle = caculate(dazhong1, [dazhong1_A_1, dazhong1_A_2, dazhong1_A_3])
console.log('dazhong1_A_Middle', dazhong1_A_Middle)

const dazhong1_Base_Middle = caculate(dazhong1, [dazhong1_Base_1, dazhong1_Base_2, dazhong1_Base_3])
console.log('dazhong1_Base_Middle', dazhong1_Base_Middle)

const dazhong1_A_Average = caculate(dazhong1, [dazhong1_A_1, dazhong1_A_2, dazhong1_A_3], true)
console.log('dazhong1_A_Average', dazhong1_A_Average)

const dazhong1_Base_Average = caculate(dazhong1, [dazhong1_Base_1, dazhong1_Base_2, dazhong1_Base_3], true)
console.log('dazhong1_Base_Average', dazhong1_Base_Average)

function getAverageNumber(args: number[]) {
  const sum = args.reduce((a, b) => a + b, 0)
  return sum / args.length
}

function getMiddleNumber(arr: number[]) {
  const sortedArr = arr.sort((a, b) => a - b); // 排序数组

  const midIndex = Math.floor(sortedArr.length / 2); // 计算中间位置的索引

  if (sortedArr.length % 2 === 0) {
    // 对于偶数个数的数组，取中间两个数的平均值
    return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
  } else {
    // 对于奇数个数的数组，直接取中间位置的数
    return sortedArr[midIndex];
  }
}
