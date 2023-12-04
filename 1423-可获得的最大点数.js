/**
 * @see https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/description/?envType=daily-question&envId=2023-12-03
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const len = cardPoints.length
  if (k === len) return cardPoints.reduce((a, b) => a + b)

  const prefixSum = new Array(len).fill(0)
  // 算前缀和
  for (let index = 0; index < cardPoints.length; index++) {
    const element = cardPoints[index];
    prefixSum[index] = (prefixSum[index - 1] || 0) + element
  }

  let left = 0
  let right = len - k - 1
  const sums = []

  while (left <= k) {
    sums.push((prefixSum[left - 1] || 0) + prefixSum[len - 1] - prefixSum[right])
    left++
    right++
  }

  return Math.max(...sums)
};

// console.log(maxScore([1,2,3,4,5,6,1], 3));
// console.log(maxScore([11,49,100,20,86,29,72], 4));
console.log(maxScore([96,90,41,82,39,74,64,50,30], 8));