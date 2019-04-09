/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s: string): number {
  let processed: number[] = [];
  let cur: number = 0;
  let longest: number = 0;
  for (let i = 0; i < s.length; i++) {
    let char: any = s[i];
    if (processed[char] === undefined || processed[char] < i - cur) {
      cur++;
      processed[char] = i;

      if (cur > longest) {
        longest = cur;
      }
    } else {
      cur = i - processed[char];
      processed[char] = i;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
