// @ts-nocheck
/**
 * 完全没搞懂
 * @see https://leetcode.cn/problems/minimum-fuel-cost-to-report-to-the-capital/?envType=daily-question&envId=2023-12-05
 */

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const len = roads.length
  if (len <= 1) return len

  const arr = new Array(roads.length + 1).fill(null).map(() => []);
  for (const [node1, node2] of roads) {
    arr[node1].push(node2); // 记录每个点的邻居
    arr[node2].push(node1);
  }

  let count = 0
  function dfs(x, fa) {
    let size = 1;
    arr[x].forEach(v => {
      if (v === fa) return
      size += dfs(v, x); // 统计子树大小
    })
    if (x !== 0) { // x 不是根节点
      count += Math.ceil(size / seats);
    }
    return size;
  }
  dfs(0, -1);

  return count
};

// console.log(minimumFuelCost([[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], 2));
console.log(minimumFuelCost([[0, 1], [0, 2], [1, 3], [1, 4]], 2));