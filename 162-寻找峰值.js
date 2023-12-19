/**
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) {
//   const len = nums.length
//   if (len === 1) return 0
//   let signed = 1
//   for (let i = 0, j = 1; i < len; i++, j++) {
//     const left = nums[i]
//     const right = nums[j]
//     let _signed = left < right ? 1 : -1
//     if (signed === 1 && _signed === -1) return i
//     signed = _signed
//   }

//   return -1
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  const len = nums.length
  if (len === 1) return 0
  let low = 0, high = len - 1
  while (low < high) {
    let mid = (low + high) >> 1
    if (nums[mid] > nums[mid + 1]) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low
}

console.log(findPeakElement([1,2,1,3,5,6,4]));