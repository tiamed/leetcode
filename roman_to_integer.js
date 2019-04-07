/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var rom = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var str = s.split("");
    var _s = str.map(function (sym) { return rom[sym]; });
    for (var i = 0; i < _s.length; i++) {
        if (_s[i] < _s[i + 1]) {
            _s[i] = -_s[i];
        }
    }
    return _s.reduce(function (acc, cur) { return acc + cur; });
};
