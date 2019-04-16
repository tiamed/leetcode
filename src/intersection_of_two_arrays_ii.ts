/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1: number[], nums2: number[]): number[] {
  let map1: Map<number, number> = mapNums(nums1);
  let map2: Map<number, number> = mapNums(nums2);
  let result: number[] = [];
  for (let key of Array.from(map1.keys())) {
    if (map2.get(key)) {
      let min = Math.min(map1.get(key), map2.get(key));
      for (let i = 0; i < min; i++) {
        result.push(key);
      }
    }
  }
  return result;
};

const mapNums = (nums: number[]) => {
  let map: Map<number, number> = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return map;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
