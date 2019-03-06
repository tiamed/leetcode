function reverse(s) {
    let len = s.length - 1;
    for (let i = 0; i < len / 2; i++) {
        s[len - i] = [s[i], s[i] = s[len - i]][0];
    }
    return s;
};

const s = ["h", "e", "l", "l", "o"];

console.log(reverse(s));