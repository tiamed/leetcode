/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s: string, t: string): boolean {
    if(JSON.stringify(Array.from(s).sort()) === JSON.stringify(Array.from(t).sort())) {
        return true;
    }
    return false;
};

console.log(isAnagram("anagram", "nagaram"));