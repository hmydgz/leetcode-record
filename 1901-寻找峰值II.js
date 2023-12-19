/**
 * @see https://leetcode.cn/problems/find-a-peak-element-ii/?envType=daily-question&envId=2023-12-19
 */

// // 暴力解
// const xMap = {
//   t: 0,
//   b: 0,
//   l: -1,
//   r: 1,
// }

// const yMap = {
//   t: -1,
//   b: 1,
//   l: 0,
//   r: 0,
// }

// /**
//  * @param {number[][]} mat
//  * @return {number[]}
//  */
// var findPeakGrid = function(mat) {
//   const m = mat.length
//   const n = mat[0].length
//   if (m === 1 && n === 1) return [0, 0]

//   /**
//    * @param {number[]} _coordinate
//    * @param {'t' | 'r' | 'b' | 'l'} direction
//    * @returns {{ value: number, coordinate: number[] }}
//    */
//   function getValue(_coordinate, direction) {
//     const [_y, _x] = _coordinate
//     const [y, x] = [_y + yMap[direction], _x + xMap[direction]]
//     const res = { value: -1, coordinate: [y, x] }
//     if (!(x < 0 || x > n - 1 || y < 0 || y > m - 1)) res.value = mat[y][x]
//     return res
//   }

//   /**
//    * 检查是否是峰值
//    * @param {number[]} coordinate 
//    */
//   function checkPeak(coordinate) {
//     const top = getValue(coordinate, 't')
//     const right = getValue(coordinate, 'r')
//     const bottom = getValue(coordinate, 'b')
//     const left = getValue(coordinate, 'l')
//     const value = mat[coordinate[0]][coordinate[1]]
//     const max = Math.max(value, top.value, right.value, bottom.value, left.value)
//     if (max === value) return { isPeak: true }
//     const obj = {
//       [top.value]: top.coordinate,
//       [right.value]: right.coordinate,
//       [bottom.value]: bottom.coordinate,
//       [left.value]: left.coordinate,
//     }
//     return { isPeak: false, nextCoordinate: obj[max] }
//   }

//   let curCoordinate = [0, 0]
//   let count = 0
//   while (count < m * n) {
//     const res = checkPeak(curCoordinate)
//     if (res.isPeak) return curCoordinate
//     curCoordinate = res.nextCoordinate
//   }

//   return [-1, -1]
// };

// 二分法

function maxIndex(arr) {
  let i = 0
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[i]) {
      i = index
    }
  }

  return i
}

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
  let low = 0, high = mat.length - 1
  while (low < high) {
    const y = (low + high) >> 1
    const x = maxIndex(mat[y])
    if (mat[y][x] > mat[y + 1][x]) {
      high = y
    } else {
      low = y + 1
    }
  }

  return [low, maxIndex(mat[low])]
};

console.log(findPeakGrid([[10,20,15],[21,30,14],[7,16,32]]));