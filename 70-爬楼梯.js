/**
 * @see https://leetcode.cn/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const cacheMap = new Map()
  function dfs(n) {
    if (cacheMap.has(n)) return cacheMap.get(n)
    if (n <= 1) return 1
    const res = dfs(n - 1) + dfs(n - 2)
    cacheMap.set(n, res)
    return res
  }
  return dfs(n)
};