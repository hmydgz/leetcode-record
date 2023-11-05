/*
 * @see https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=daily-question&envId=2023-11-03
 * @see https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/solutions/2510360/san-chong-fang-fa-dfsbfsbfslian-biao-fu-1bmqp/?envType=daily-question&envId=2023-11-03

给定一个二叉树：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。

初始状态下，所有 next 指针都被设置为 NULL 。

示例 1：


输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。
示例 2：

输入：root = []
输出：[]
*/



/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  const leftArr = []
  function dfs(node, depth) {
    if (node === null) return

    if (depth === leftArr.length) {
      leftArr.push(node)
    } else {
      leftArr[depth].next = node
      leftArr[depth] = node
    }

    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }

  dfs(root, 0)
  return root;
};