/**
给你一个数组 nums ，请你完成两类查询。

其中一类查询要求 更新 数组 nums 下标对应的值
另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 ，其中 left <= right
实现 NumArray 类：

NumArray(int[] nums) 用整数数组 nums 初始化对象
void update(int index, int val) 将 nums[index] 的值 更新 为 val
int sumRange(int left, int right) 返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 （即，nums[left] + nums[left + 1], ..., nums[right]）
 

示例 1：

输入：
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
输出：
[null, 9, null, 8]

解释：
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // 返回 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1,2,5]
numArray.sumRange(0, 2); // 返回 1 + 2 + 5 = 8
 

提示：

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
0 <= index < nums.length
-100 <= val <= 100
0 <= left <= right < nums.length
调用 update 和 sumRange 方法次数不大于 3 * 104
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  const len = nums.length
  this.nums = nums
  this.size = Math.floor(Math.sqrt(len))
  const groupSumsLen = Math.floor(len / this.size) + (len % this.size ? 1 : 0)
  this.groupSums = new Array(groupSumsLen).fill(0)
  for (let index = 0; index < groupSumsLen; index++) {
    const left = index * this.size
    const right = Math.min((index + 1) * this.size, len)
    for (let i = left; i < right; i++) {
      const element = nums[i];
      this.groupSums[index] += element
    }
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  this.nums[index] = val
  if (this.size !== 1) {
    const groupIndex = Math.floor(index / this.size)
    const leftIndex = groupIndex * this.size
    const rightIndex = Math.min(leftIndex + this.size, this.nums.length) - 1
    this.groupSums[groupIndex] = this._sumRange(leftIndex, rightIndex)
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  if (this.size === 1) return this._sumRange(left, right)
  const leftGroupIndex = Math.floor(left / this.size)
  const rightGroupIndex = Math.floor(right / this.size)
  let count = 0
  if ((rightGroupIndex - leftGroupIndex) > 1) { // 可使用已经计算好的区间和
    for (let index = leftGroupIndex + (left > 0 ? 1 : 0); index <= rightGroupIndex - 1; index++) {
      count += this.groupSums[index];
    }
    if (left > 0) {
      count += this._sumRange(left, this.size * (leftGroupIndex + 1) - 1)
    }
    count += this._sumRange((this.size * rightGroupIndex), right)
  } else {
    count += this._sumRange(left, right)
  }
  return count
};

/**
 * 直接计算区间和
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype._sumRange = function(left, right) {
  if (left === right) return this.nums[left]
  let count = 0
  for (let i = left; i <= right; i++) {
    count += this.nums[i]
  }
  return count
}


function test(actions = [], data = []) {
  let nums = null
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i]
    switch (action) {
      case 'NumArray':
        nums = new NumArray(data[i][0])
        console.log(nums);
        break;
      default:
        console.log(nums?.[action](...data[i]));
        console.log(action, data[i], nums);
        console.log('');
        break;
    }
  }
}

test(
  ["NumArray","update","update","update","sumRange","update","sumRange","update","sumRange","sumRange","update"],
  [[[7,2,7,2,0]],[4,6],[0,2],[0,9],[4,4],[3,8],[0,4],[4,1],[0,3],[0,4],[0,4]]
)