/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums: Array<number>) {
  let keys = new Set(nums);
  let map: Map<number, number> = new Map();
  let max: number = 0;
  let maxVal = null;
  for (let key of keys) {
    map.set(key, 0);
  }
  for (let num of nums) {
    map.set(num, map.get(num) + 1);
  }
  for (const [key, val] of map.entries()) {
    if (max < val) {
      max = val;
      maxVal = key;
    }
  }
  return maxVal;
};
