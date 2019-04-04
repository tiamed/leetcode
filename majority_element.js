var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var e_1, _a, e_2, _b, e_3, _c;
    var keys = new Set(nums);
    var map = new Map();
    var max = 0;
    var maxVal = null;
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            map.set(key, 0);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1["return"])) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var nums_1 = __values(nums), nums_1_1 = nums_1.next(); !nums_1_1.done; nums_1_1 = nums_1.next()) {
            var num = nums_1_1.value;
            map.set(num, map.get(num) + 1);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (nums_1_1 && !nums_1_1.done && (_b = nums_1["return"])) _b.call(nums_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var _d = __values(map.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var _f = __read(_e.value, 2), key = _f[0], val = _f[1];
            if (max < val) {
                max = val;
                maxVal = key;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_c = _d["return"])) _c.call(_d);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return maxVal;
};
