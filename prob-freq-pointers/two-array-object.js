"use strict";

// add whatever parameters you deem necessary & write docstring

/*
twoArrayObject»
This should take two arrays of possibly-different lengths. The first array consists of keys and the second one consists of values.

This should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

twoArrayObject(['x', 'y', 'z'], [1, 2]);
  // {'x': 1, 'y': 2, 'z': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
  // {'a': 1, 'b': 2, 'c': 3}
*/

// assume that keys are unique!!!

/**
 * creates an object containing keys and values
 * @params keys, array of something
 * @params values, array of something
 * return object
 */
function twoArrayObject(keys, values) {
  return keys.reduce(
    (acc, key, idx) => ({ ...acc, [key]: values[idx] || null }),
    {}
  );
}
