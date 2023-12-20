/**
 * @see https://leetcode.cn/problems/min-cost-climbing-stairs/?envType=daily-question&envId=2023-12-19
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const len = cost.length
  const cache = Array(len + 1).fill(-1)
  function dfs(i) {
    if (i <= 1) return 0
    if (cache[i] !== -1) return cache[i]
    return cache[i] = Math.min(dfs(i - 1) + cost[i - 1], dfs(i - 2) + cost[i - 2])
  }

  return dfs(len)
};

// console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
console.log(minCostClimbingStairs([10,15,20]));