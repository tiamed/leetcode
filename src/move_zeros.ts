/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums: number[]): void {
  let len: number = nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) nums.splice(i, 1);
  }
  let count: number = len - nums.length;
  console.log(count);
  let zeros: number[] = Array.from(Array(count), () => 0);
  nums.splice(nums.length, 0, ...zeros);
};
