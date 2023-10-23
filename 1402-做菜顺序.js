/* 一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。

一道菜的 「 like-time 系数 」定义为烹饪这道菜结束的时间（包含之前每道菜所花费的时间）乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。

返回厨师在准备了一定数量的菜肴后可以获得的最大 like-time 系数 总和。

你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。

示例 1：

输入：satisfaction = [-1,-8,0,5,-9]
输出：14
解释：去掉第二道和最后一道菜，最大的 like-time 系数和为 (-1*1 + 0*2 + 5*3 = 14) 。每道菜都需要花费 1 单位时间完成。
示例 2：

输入：satisfaction = [4,3,2]
输出：20
解释：可以按照任意顺序做菜 (2*1 + 3*2 + 4*3 = 20)
示例 3：

输入：satisfaction = [-1,-4,-5]
输出：0
解释：大家都不喜欢这些菜，所以不做任何菜就可以获得最大的 like-time 系数。

提示：

n == satisfaction.length
1 <= n <= 500
-1000 <= satisfaction[i] <= 1000 */

// function maxSatisfaction(satisfaction) {
//   // 非负数列表
//   const nonnegativeArr = []
//   // 负数列表
//   const negativeArr = []
//   // 非负数之和
//   let nonnegativeTotal = 0
//   const satisfactionLen = satisfaction.length
//   for (let index = 0; index < satisfactionLen; index++) {
//     const v = satisfaction[index];
//     if (v >= 0) {
//       nonnegativeTotal += v
//       nonnegativeArr.push(v)
//     } else {
//       negativeArr.push(v)
//     }
//   }

//   // 没有非负数，直接不做了
//   if (nonnegativeArr.length === 0 || nonnegativeTotal === 0) return 0
//   nonnegativeArr.sort((a, b) => a - b)
//   let nonnegativeResult = nonnegativeArr.reduce((count, value, i) => (count + (value * (i + 1))), 0)
//   // 只有非负数
//   if (satisfactionLen === nonnegativeArr.length) return nonnegativeResult

//   negativeArr.sort((a, b) => a - b)
//   console.log({ negativeArr, nonnegativeArr, nonnegativeResult, nonnegativeTotal })
//   // 负数结果
//   let negativeResult = 0
//   const negativeArrLen = negativeArr.length
//   let realityNegativeArrLen = 1
//   for (let index = 0; index < negativeArrLen; index++) {
//     const element = negativeArr[index];
//     const currentValue = element * realityNegativeArrLen
//     console.log({ nonnegativeTotal, currentValue, element, leftLen: realityNegativeArrLen, negativeResult })
//     if ((nonnegativeTotal + currentValue) <= 0) continue
//     negativeResult += currentValue
//     nonnegativeResult += nonnegativeTotal
//     realityNegativeArrLen++
//     console.log('----', { negativeResult, nonnegativeResult })
//   }

//   return nonnegativeResult + negativeResult
// };

function maxSatisfaction(satisfaction) {

}


// console.log(maxSatisfaction([-1,-8,0,5,-7]));
// console.log(maxSatisfaction([-2,5,-1,0,3,-3]));
// console.log(maxSatisfaction([-5,-7,8,-2,1,3,9,5,-10,4,-5,-2,-1,-6]));


// console.log([-10, -7, -6, -5, -5, -2, -2, -1, 1, 3, 4, 5, 8, 9].reduce((count ,v, i) => count + (v * (i + 1)), 0));
console.log([-10, -7, -6, -5, -5, -2, -2, -1, 1, 3, 4, 5, 8, 9].sort((a, b) => b - a));