/**
 * @see https://leetcode.cn/problems/first-completely-painted-row-or-column/description/?envType=daily-question&envId=2023-12-01
 */

class Matrix {
  /**
   * 矩阵数据
   * @param {number[][]} data
   */
  constructor(data) {
    this.data = data;
    const rowNumber = data.length
    const columnNumber = data[0].length
    this.rowSums = new Array(rowNumber).fill(0)
    this.columnSums = new Array(columnNumber).fill(0)
    /**
     * 数字在矩阵中的坐标
     * @type {Map<number, [number, number]>}
     */
    this.coordinateMap = new Map()

    for (let i = 0; i < rowNumber; i++) {
      for (let j = 0; j < columnNumber; j++) {
        this.coordinateMap.set(this.data[i][j], [i, j])
      }
    }
  }

}

/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
  const rowNumber = mat.length
  const columnNumber = mat[0].length
  const rowCount = new Array(rowNumber).fill(0)
  const columnCount = new Array(columnNumber).fill(0)
  const coordinateMap = new Map()
  for (let i = 0; i < rowNumber; i++) {
    for (let j = 0; j < columnNumber; j++) {
      coordinateMap.set(mat[i][j], [i, j])
    }
  }

  const arrLen = arr.length
  for (let i = 0; i < arrLen; i++) {
    const v = arr[i];
    const [row, cloumn] = coordinateMap.get(v)
    rowCount[row]++
    if (rowCount[row] === columnNumber) return i
    columnCount[cloumn]++
    if (columnCount[cloumn] === rowNumber) return i
  }

  return -1
};

// console.log(firstCompleteIndex([1,3,4,2], [[1,4],[2,3]]));
console.log(firstCompleteIndex([1,4,5,2,6,3], [[4,3,5],[1,2,6]]));