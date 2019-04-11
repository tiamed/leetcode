/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s: string): number {
  let str: string[] = s.split('');
  let map: Map<string, number> = new Map();
  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  if (!Array.from(map.values()).includes(1)) {
    return -1;
  }
  let uniq = [...map].find(([key, val]) => val === 1)[0];
  return str.findIndex(char => char === uniq);
};

console.log(firstUniqChar('leetcode'));
