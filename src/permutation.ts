/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums: number[]): number[][] {
  let len = nums.length;
  let arr: number[][] = [];
  permutation(nums, 0, len - 1, arr);
  return arr;
};

let permutation = function(
  nums: number[],
  start: number,
  end: number,
  arr: number[][]
) {
  if (start == end) {
    arr.push(nums);
  } else {
    for (let i = start; i <= end; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      permutation(nums.slice(0), start + 1, end, arr); //用slice(0)防止使用同一引用
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
};
