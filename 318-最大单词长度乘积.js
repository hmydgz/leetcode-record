/*
 @see https://leetcode.cn/problems/maximum-product-of-word-lengths/description/

给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

示例 1：

输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
输出：16 
解释：这两个单词为 "abcw", "xtfn"。
示例 2：

输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
输出：4 
解释：这两个单词为 "ab", "cd"。
示例 3：

输入：words = ["a","aa","aaa","aaaa"]
输出：0 
解释：不存在这样的两个单词。
*/

const aCharCode = 'a'.charCodeAt(0)

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const len = words.length;
  const makers = new Array(len).fill(0)
  let max = 0

  words.forEach((v, _i) => {
    for (let i = 0; i < v.length; i++) {
      makers[_i] |= 1 << (v.charCodeAt(i) - aCharCode)
    }
  })

  for (let i = 0; i < len; i++) {
    const maker_a = makers[i];
    for (let j = i + 1; j < len; j++) {
      const maker_b = makers[j];
      if (maker_a & maker_b) continue
      max = Math.max(max, words[i].length * words[j].length)
    }
  }

  return max
};

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));