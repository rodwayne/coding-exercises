/**
 * Task
 * Create a method to see whether the string is ALL CAPS
 *
 * https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
 */

String.prototype.isUpperCase = function () {
  const upperCaseLetters = /^[^a-z]+$/;
  return upperCaseLetters.test(this);
};
