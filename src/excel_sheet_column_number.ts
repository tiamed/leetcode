/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s: string): number {
  let len = s.length;
  let str: string[] = s.split('');
  let vals: number[] = str.map(
    (x, idx) => (x.charCodeAt(0) - 64) * 26 ** (len - idx - 1)
  );
  return vals.reduce((acc, cur) => {
    return acc + cur;
  });
};

console.log(titleToNumber('ZY'));
