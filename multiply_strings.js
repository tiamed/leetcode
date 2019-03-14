var multiply = function (num1, num2) {
    let result = eval(num1) * eval(num2);
    if (result > Number.MAX_SAFE_INTEGER) result = BigInt(num1) * BigInt(num2);
    return result.toString();
};