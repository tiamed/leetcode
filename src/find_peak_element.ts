function findPeakElement(nums: number[]): number {
  const _nums: number[] = [-Infinity, ...nums, -Infinity];
  return (
    _nums.findIndex(
      (n, i) => n > (_nums[i - 1] || Infinity) && n > (_nums[i + 1] || Infinity)
    ) - 1
  );
}

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([1, 2, 3, 1]));
