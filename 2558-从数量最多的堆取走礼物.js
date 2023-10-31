/*
给你一个整数数组 gifts ，表示各堆礼物的数量。每一秒，你需要执行以下操作：

选择礼物数量最多的那一堆。
如果不止一堆都符合礼物数量最多，从中选择任一堆即可。
选中的那一堆留下平方根数量的礼物（向下取整），取走其他的礼物。
返回在 k 秒后剩下的礼物数量。


示例 1：

输入：gifts = [25,64,9,4,100], k = 4
输出：29
解释：
按下述方式取走礼物：
- 在第一秒，选中最后一堆，剩下 10 个礼物。
- 接着第二秒选中第二堆礼物，剩下 8 个礼物。
- 然后选中第一堆礼物，剩下 5 个礼物。
- 最后，再次选中最后一堆礼物，剩下 3 个礼物。
最后剩下的礼物数量分别是 [5,8,9,4,3] ，所以，剩下礼物的总数量是 29 。
示例 2：

输入：gifts = [1,1,1,1], k = 4
输出：4
解释：
在本例中，不管选中哪一堆礼物，都必须剩下 1 个礼物。
也就是说，你无法获取任一堆中的礼物。
所以，剩下礼物的总数量是 4 。


提示：

1 <= gifts.length <= 103
1 <= gifts[i] <= 109
1 <= k <= 103
*/

class Heap {
  constructor(compare = undefined) {
    this.compare = compare || this.defaultCompare
    this.arr = []
  }
  defaultCompare(a, b) { return a > b }

  get size() { return this.arr.length - 1 }

  push(item) {
    this.arr.push(item)
    this._up(this.size)
  }

  pop() {
    this.swap(0, this.size)
    const res = this.arr.pop()
    this._down(0)
    return res
  }

  _up(i) {
    while (i != 0) {
      const parentIndex = this._parent(i)
      if (!this.compare(this.arr[i], this.arr[parentIndex])) return
      this.swap(i, parentIndex)
      i = parentIndex
    }
  }

  _down(i) {
    const max_i = this.size
    while (i <= max_i) {
      let child_i = this._left(i)
      if (child_i > max_i) return // 不存在子节点
      let right_i = this._right(i)
      // 存在右子树，且右子树优先级更高
      if (right_i <= max_i && this.compare(this.arr[right_i], this.arr[child_i])) {
        child_i = right_i
      }
      if (this.compare(this.arr[i], this.arr[child_i])) return
      this.swap(child_i, i)
      i = child_i
    }
  }

  _left(i) { return i * 2 + 1 }
  _right(i) { return i * 2 + 2 }
  _parent(i) { return Math.floor((i - 1) / 2) }

  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
  }

  static heapify(data, compare) {
    const heap = new Heap()
    const len = data.length
    for (let index = 0; index < len; index++) {
      heap.push(data[index])
    }

    return heap
  }
}

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  const heap = Heap.heapify(gifts)
  for (let index = 0; index < k; index++) {
    const max = heap.pop()
    heap.push(Math.max(Math.floor(Math.sqrt(max)), 1))
  }

  return heap.arr.reduce((count, value) => count + value, 0)
};