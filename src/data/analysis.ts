import dazhong1 from './dazhong1.json'
import dazhong1_A_1 from './dazhong1-A-1.json'
import dazhong1_A_2 from './dazhong1-A-2.json'
import dazhong1_A_3 from './dazhong1-A-3.json'
import dazhong1_Base_1 from './dazhong1-Base-1.json'
import dazhong1_Base_2 from './dazhong1-Base-2.json'
import dazhong1_Base_3 from './dazhong1-Base-3.json'

import type { TImageInfo, TMeasureData } from './types'
import { getAverageNumber, getMiddleNumber } from './utils'

function calculate(base: TImageInfo[], data: TMeasureData[][], isAverage = false) {
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

const dazhong1_A_Middle = calculate(dazhong1, [dazhong1_A_1, dazhong1_A_2, dazhong1_A_3])
console.log('dazhong1_A_Middle', dazhong1_A_Middle)

const dazhong1_Base_Middle = calculate(dazhong1, [dazhong1_Base_1, dazhong1_Base_2, dazhong1_Base_3])
console.log('dazhong1_Base_Middle', dazhong1_Base_Middle)

const dazhong1_A_Average = calculate(dazhong1, [dazhong1_A_1, dazhong1_A_2, dazhong1_A_3], true)
console.log('dazhong1_A_Average', dazhong1_A_Average)

const dazhong1_Base_Average = calculate(dazhong1, [dazhong1_Base_1, dazhong1_Base_2, dazhong1_Base_3], true)
console.log('dazhong1_Base_Average', dazhong1_Base_Average)

