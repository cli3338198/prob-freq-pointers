"use strict";

// Input: (nums, targetAvg) (array, number)
// Output: true/false, boolean

// find a pair of numbers in the array that equals the targetAvg and return true
// or false

/**
 * @params nums, sorted array
 * @params targetAvg, number
 */

/*
averagePair([1, 2, 3], 2.5);         // true
averagePair([3, 3, 6, 12, 19], 8);   // false
averagePair([1, 2, 3], 2);           // true
averagePair([], 4);                  // false
*/


// add whatever parameters you deem necessary & write docstring
function averagePair(nums, targetAvg) {
  // create two variables for left and right pointers
  let leftInd = 0;
  let rightInd = nums.length-1;
  // while loop while left pointer is less than right pointer
  while (leftInd < rightInd) {
    let currAvg = ((nums[leftInd] + nums[rightInd]) / 2);
    // find average of left elemetn and right element and compare to targetAvg
    if (currAvg === targetAvg) return true;
    // if average is less than targetAvg
    if (currAvg < targetAvg) {
      leftInd++;
    }
    // else decrement right pointer
    else {
      rightInd--;
    }
  }
  // return false
  return false;
}

