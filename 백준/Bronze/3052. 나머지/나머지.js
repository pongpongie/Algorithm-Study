const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const mod = (numbers) => {
  let uniArr = [];

  numbers.forEach((num) => {
    const remainder = num % 42;
    if (!uniArr.includes(remainder)) {
      uniArr.push(remainder);
    }
  });

  return uniArr.length;
};

console.log(mod(input));