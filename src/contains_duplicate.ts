/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums: number[]): boolean {
  if (nums.length <= 1) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums.slice(i).includes(nums[i])) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([3, 1]));
