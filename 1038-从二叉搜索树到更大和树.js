/**
 * @see https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/description/?envType=daily-question&envId=2023-12-04
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let sum = 0;
  const dfs = (/** @type {TreeNode} */node) => {
    if (!node) return
    dfs(node.right);
    sum += node.val;
    node.val = sum;
    dfs(node.left);
  }

  dfs(root);
  return root;
};