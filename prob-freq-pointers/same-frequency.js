"use strict";

/**
 * @params num1, number
 * @params num2, number
 *
 * Find out if two numbers have the same frequency of digits
 */

// loop through first number and split the ones digit off and store it in a
// frequency counter

// loop through second number and do same thing but decrement frequency counter

function sameFrequency(num1 , num2) {
  const freq = {};

  while (num1 > 0) {
    let remainder = num1 % 10;
    remainder in freq ? freq[remainder]++ : freq[remainder] = 1;
    num1 = Math.floor(num1 / 10);
  }

  while (num2 > 0) {
    let remainder = num2 % 10;
    if (remainder in freq) {
      freq[remainder]--;
    }
    else {
      return false;
    }
    num2 = Math.floor(num2 / 10);
  }

  if (Object.values(freq).every(el => el === 0)) {
    return true;
  }
  return false;
}
