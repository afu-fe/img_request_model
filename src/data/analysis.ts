import dazhong1 from './dazhong1.json'
import dazhong1_A_1 from './dazhong1_A_1.json'
import dazhong1_A_2 from './dazhong1_A_2.json'
import dazhong1_A_3 from './dazhong1_A_3.json'
import dazhong1_Base_1 from './dazhong1_Base_1.json'
import dazhong1_Base_2 from './dazhong1_Base_2.json'
import dazhong1_Base_3 from './dazhong1_Base_3.json'

import dazhong2 from './dazhong2.json'
import dazhong2_A_1 from './dazhong2_A_1.json'
import dazhong2_A_2 from './dazhong2_A_2.json'
import dazhong2_A_3 from './dazhong2_A_3.json'
import dazhong2_Base_1 from './dazhong2_Base_1.json'
import dazhong2_Base_2 from './dazhong2_Base_2.json'
import dazhong2_Base_3 from './dazhong2_Base_3.json'

import type { TImageInfo, TMeasureData } from './types'
import { getAverageNumber, getMiddleNumber } from './utils'

function checkData(data: TImageInfo[]) {
  const set = new Set<string>()
  let counter = 0

  data.forEach((item) => {
    if (set.has(item.url)) {
      counter += 1
    } else {
      set.add(item.url)
    }
  })

  console.log('重复的 url 数量', counter)
}

checkData(dazhong1)

function calculate(base: TImageInfo[], data: TMeasureData[][], isAverage = false) {
  const result: number[] = []

  for (let i = 0; i < base.length; i++) {
    // 计算每一组的平均值
    const baseItem = base[i]
    // console.log('base', baseItem.url)
    const costArray: number[] = []
    data.forEach((group) => {
      const item = group.find((item) => {
        if (item.url === baseItem.url) {
          return true
        }
      })
      if (item) {
        // console.log('group', item.url)
        const cost = item.endTime - item.startTime
        costArray.push(cost)
      } else {
        console.error('not found', baseItem.url)
      }
    })
    // console.log('costArray', costArray)
    const averageCost = getAverageNumber(costArray)

    result.push(averageCost)
  }

  if (isAverage) {
    return getAverageNumber(result)
  } else {
    return getMiddleNumber(result)
  }

}

const dazhong1_Base_Middle = calculate(dazhong1, [dazhong1_Base_1, dazhong1_Base_2, dazhong1_Base_3])
console.log('dazhong1_Base_Middle', dazhong1_Base_Middle)

const dazhong1_A_Middle = calculate(dazhong1, [dazhong1_A_1, dazhong1_A_2, dazhong1_A_3])
console.log('dazhong1_A_Middle', dazhong1_A_Middle)

const dazhong1_Base_Average = calculate(dazhong1, [dazhong1_Base_1, dazhong1_Base_2, dazhong1_Base_3], true)
console.log('dazhong1_Base_Average', dazhong1_Base_Average)

const dazhong1_A_Average = calculate(dazhong1, [dazhong1_A_1, dazhong1_A_2, dazhong1_A_3], true)
console.log('dazhong1_A_Average', dazhong1_A_Average)


const dazhong2_Base_Middle = calculate(dazhong2, [dazhong2_Base_1, dazhong2_Base_2, dazhong2_Base_3])
console.log('dazhong2_Base_Middle', dazhong2_Base_Middle)

const dazhong2_A_Middle = calculate(dazhong2, [dazhong2_A_1, dazhong2_A_2, dazhong2_A_3])
console.log('dazhong2_A_Middle', dazhong2_A_Middle)

const dazhong2_Base_Average = calculate(dazhong2, [dazhong2_Base_1, dazhong2_Base_2, dazhong2_Base_3], true)
console.log('dazhong2_Base_Average', dazhong2_Base_Average)

const dazhong2_A_Average = calculate(dazhong2, [dazhong2_A_1, dazhong2_A_2, dazhong2_A_3], true)
console.log('dazhong2_A_Average', dazhong2_A_Average)



