/*
给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

示例 1：

输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"
*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = ''
  let needCarry = false
  const len = Math.max(a.length, b.length)
  if (a.length !== b.length) {
    a = a.padStart(len, '0')
    b = b.padStart(len, '0')
  }
  let i = len - 1

  console.log({ a, b });

  while (i >= 0) {
    console.log({ 'a[i]': a[i], 'b[i]': b[i], needCarry, i, res });
    let _res
    if (a[i] === b[i]) {
      _res = needCarry ? '1' : '0'
      needCarry = a[i] !== '0' // 消耗进位
    } else {
      _res = needCarry ? '0' : '1'
    }
    res = `${_res}${res}`
    i--
  }

  return needCarry ? `1${res}` : res
};

// console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "1"));