/*

    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

*/

/**
 * @param
 * @return
 */




var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        const diffIndex = nums.indexOf(diff);
        // "diffIndex !== index" takes care of same index not being reused
        if (diffIndex !== -1 && diffIndex !== index) {
            return [index, diffIndex];
        }
    }
};

/**
 *
 * O(n) time
 * O(n) space
 *
 * 5m
 */

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) return [map[nums[i]], i];
    map[target - nums[i]] = i;
  }

  return false
};

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return [map.get(nums[i]), i];
    map.set(target - nums[i], i);
  }
  return false
};
