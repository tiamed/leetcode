var multiply = function(num1: string, num2: string): string {
  let result: number | bigint = eval(num1) * eval(num2);
  if (result > Number.MAX_SAFE_INTEGER) result = BigInt(num1) * BigInt(num2);
  return result.toString();
};
