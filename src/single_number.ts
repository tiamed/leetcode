/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums: number[]): number {
  let freq: Map<number, number> = new Map();
  for (let i of nums) {
    let f = freq.get(i);
    if (f === undefined) {
      freq.set(i, 1);
    } else {
      freq.set(i, 2);
    }
  }
  for (let i of freq.keys()) {
    if (freq.get(i) === 1) return i;
  }
};
