/**
 * @params s1, string
 * @params s2, string
 *
 * Checks whether `s1` exists in `s2` in the right order
 */

// add whatever parameters you deem necessary & write docstring
function isSubsequence(s1, s2) {
  let point1 = 0;
  let point2 = 0;

  while (point1 < s1.length) {
    if (s1[point1] === s2[point2]) {
      point1++;
      point2++;
    } else {
      point2++;
    }
    if (point1 === s1.length) return true;
    if (point2 === s2.length) return false;
  }
}
