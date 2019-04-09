/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a: number, b: number): number {
  while (b) {
    let carry: number = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};

console.log(getSum(4, 9));
