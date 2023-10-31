/*
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

假设环境不允许存储 64 位整数（有符号或无符号）。

示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0
  const max = Math.pow(2, 31)
  const min = Math.pow(-2, 31) - 1
  while (x !== 0) {
    const num = x % 10
    x = ~~(x / 10)
    res = res * 10 + num
    if (res > max || res < min) return 0
  }

  return res
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(901000));