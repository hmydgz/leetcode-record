/*
给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

示例 1：

输入：n = 13
输出：6
示例 2：

输入：n = 0
输出：0

提示：

0 <= n <= 109
*/

/**
 * 看题解还是不太懂
 * @see https://leetcode.cn/problems/number-of-digit-one/solutions/2362053/233-shu-zi-1-de-ge-shu-qing-xi-tu-jie-by-pgb1/
 */

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let count = 0
  let digit = 1
  let high = Math.floor(n / 10)
  let current = n % 10
  let low = 0

  while (high !== 0 || current !== 0) {
    if (current === 0) {
      count += high * digit
    } else if (current === 1) {
      count += high * digit + low + 1
    } else {
      count += (high + 1) * digit
    }
    low += current * digit
    current = high % 10
    digit *= 10
    high = Math.floor(high / 10)
  }

  return count
};

console.log(countDigitOne(11));