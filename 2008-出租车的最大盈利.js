/**
 * @see https://leetcode.cn/problems/maximum-earnings-from-taxi/description/?envType=daily-question&envId=2023-12-13
 */

/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function(n, rides) {
  const group = Array(n + 1).fill(null).map(() => [])
  rides.forEach(([start, end, cost]) => {
    group[end].push([start, end - start + cost])
  })

  const cache = Array(n + 1).fill(-1)
  function dfs(i) {
    if (i === 0) {
      return 0
    }
    if (cache[i] !== -1) return cache[i]

    let res = dfs(i - 1)
    group[i].forEach(([start, total]) => {
      res = Math.max(res, total + dfs(start))
    })

    return cache[i] = res
  }

  return dfs(n)
};

console.log(maxTaxiEarnings(20, [[1,6,1],[3,10,2],[10,12,3],[11,12,2],[12,15,2],[13,18,1]]));