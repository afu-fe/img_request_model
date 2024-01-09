// 计算平均值 Mean
export function getAverageNumber(arr: number[]) {
  if (arr.length === 0) {
    return 0
  }

  const sum = arr.reduce((acc, val) => acc + val, 0)
  const mean = sum / arr.length

  return mean
}

// 计算中位数 Median
export function getMiddleNumber(arr: number[]) {
  if (arr.length === 0) {
    throw new Error('Input array is empty');
  }

  const sortedArr = arr.slice().sort((a, b) => a - b); // 排序数组

  const midIndex = Math.floor(sortedArr.length / 2); // 计算中间位置的索引

  if (sortedArr.length % 2 === 0) {
    // 对于偶数个数的数组，取中间两个数的平均值
    return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
  } else {
    // 对于奇数个数的数组，直接取中间位置的数
    return sortedArr[midIndex];
  }
}

// 数组打乱, 直接修改原数据, Fisher-Yates shuffle 算法
export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}