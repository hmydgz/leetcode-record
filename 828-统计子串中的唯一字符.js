/**
我们定义了一个函数 countUniqueChars(s) 来统计字符串 s 中的唯一字符，并返回唯一字符的个数。

例如：s = "LEETCODE" ，则其中 "L", "T","C","O","D" 都是唯一字符，因为它们只出现一次，所以 countUniqueChars(s) = 5 。

本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。输入用例保证返回值为 32 位整数。

注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 s 的所有子字符串中的唯一字符）。


示例 1：

输入: s = "ABC"
输出: 10
解释: 所有可能的子串为："A","B","C","AB","BC" 和 "ABC"。
     其中，每一个子串都由独特字符构成。
     所以其长度总和为：1 + 1 + 1 + 2 + 2 + 3 = 10
示例 2：

输入: s = "ABA"
输出: 8
解释: 除了 countUniqueChars("ABA") = 1 之外，其余与示例 1 相同。
示例 3：

输入：s = "LEETCODE"
输出：92
 

提示：

1 <= s.length <= 105
s 只包含大写英文字符

 */

/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  const len = s.length
  let count = 0
  // 保存从左往右查时每个字母左侧相同字母的下标，左侧无相同字母时则值为 -1
  const leftIndexArr = new Array(len)
  // 保存从右往左查时每个字母右侧相同字母的下标，右侧无相同字母时则值为字符串长度
  const rightIndexArr = new Array(len)
  // 记录遍历时的字母下标，从左往右时填充 -1 从右往左时填充字符串长度
  const idx = new Array(26).fill(-1)

  // 从左往右遍历
  for (let index = 0; index < len; index++) {
    // 字母下标
    const u = s.charCodeAt(index) - 65;
    // 从左往右查，记录当前位字母左侧前一个相同字母的下标
    leftIndexArr[index] = idx[u]
    // 更新缓存记录
    idx[u] = index
  }

  // 从右往左查，默认值为字符串长度
  idx.fill(len)

  // 从右往左遍历
  for (let index = len - 1; index >= 0; index--) {
    // 字母下标
    const u = s.charCodeAt(index) - 65;
    // 从右往左查，第一个字母在 rightIndexArr 表示每个字母对应的下一个相同字母的下标
    rightIndexArr[index] = idx[u]
    // 更新缓存记录
    idx[u] = index
  }

  for (let index = 0; index < len; index++) {
    /**
     * 当前位的字符串在子字符串中是唯一字符
     * 左侧下标到当前下标的子字符串数量为下标数的差，右侧同理
     * @see 乘法原理
     * @see https://leetcode.cn/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/1804348/by-ac_oier-922k/
     */
    count += (index - leftIndexArr[index]) * (rightIndexArr[index] - index)
  }

  return count
};
console.log(uniqueLetterString('LEETCODE'));