"use strict";

// add whatever parameters you deem necessary & write doc comment
/*
This should accept two strings: word and letters. It should return true if the word can be built with the letters; otherwise, it should return false.

There are only lowercase letters (with no spaces or punctuation) in both word and letters.

Constraints: time complexity: O(w + k) (if w is the length of word and k is the length of letters)

canConstructWord('aa', 'abc');
  // false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba');
  // true -- can build "abc" with letters "abcd"

canConstructWord('aabb', 'bcabad');
  // true -- can build "aabbcc" with those letters
*/

/**
 * finds if the word can be built with the letters provided
* @params word, string
 * @params letters, string
 * return true or false
 */

// 'aa' 'abc' => false
// 'abc' 'dcba' => true
// 'aabb' 'bcabad' => true
// "" "" => true
// "" "asdfasddf" => true

// check if letters.length < word.length
// create freq of letters
// loop through letters in word
// check if they exist in letters, if freq[letters] <= 0 || !(letters in freq) return false
// decrement in letter freq
// return true
function canConstructWord(word, letters) {
  if (!word.length) return true;
  if (letters.length < word.length) return false;
  const freq = letters
    .split("")
    .reduce((acc, char) => ({ ...acc, [char]: acc[char] + 1 || 1 }), {});
  for (const char of word) {
    if (!(char in freq) || freq[char] === 0) return false;
    freq[char]--;
  }
  return true;
}
