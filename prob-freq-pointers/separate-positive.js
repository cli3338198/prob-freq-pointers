"use strict";
/* 
separatePositive»
This should take an array of non-zero numbers. Separate the positive numbers to the left and the negative numbers to the right. The positive numbers and negative numbers need not be in sorted order.

The problem should be done in place, and the function should return the original array, not a copy.

separatePositive([2, -1, -3, 6]);         // [2, 6, -3, -1]
separatePositive([-5, 5]);                // [5, -5]
separatePositive([1, 2, 3]);              // [1, 2, 3]
Constraints: Time complexity: O(n)
*/

// two pointers, left and right
// swap left and right if left is negative and right is positive,
// else if left is positive and right is positve, left++
// else if left is negative and right is negative, right--

/**
 * separates array into positives to left and negataives to right
 * @params array of non-zero numbers
 * return original array
 */
function separatePositive(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const leftNum = nums[left];
    const rightNum = nums[right];
    if (leftNum < 0 && rightNum > 0) {
      swap(left, right, nums);
      left++;
      right--;
    } else if (leftNum > 0 && rightNum > 0) {
      left++;
    } else if (leftNum < 0 && rightNum < 0) {
      right--;
    }
  }
  return nums;
}

/**
 * swaps indices
 * @params index index
 * swaps numbers in the array
 */
function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
