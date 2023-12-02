/**

车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）

给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。

当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。

示例 1：

输入：trips = [[2,1,5],[3,3,7]], capacity = 4
输出：false
示例 2：

输入：trips = [[2,1,5],[3,3,7]], capacity = 5
输出：true

 */


/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const map = {}
  const len = trips.length

  for (let index = 0; index < len; index++) {
    const v = trips[index];
    const [nums, form, to] = v
    if (!(form in map)) map[form] = { up: 0, down: 0 }
    map[form].up += nums
    if (map[form].up > capacity) return false
    if (!(to in map)) map[to] = { up: 0, down: 0 }
    map[to].down += nums
  }

  let countNums = 0

  for (const key in map) {
    countNums += (map[key].up - map[key].down)
    if (countNums > capacity) return false
  }
  return true
};

console.log(carPooling([[2,1,5],[3,3,7]], 5));