const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const operation = (a, b) => {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;

  let sum = 0;

  num1 +=
    Number(a[0]) * 100 * Number(b[2]) +
    Number(a[1]) * 10 * Number(b[2]) +
    Number(a[2]) * Number(b[2]);

  num2 +=
    Number(a[0]) * 100 * Number(b[1]) +
    Number(a[1]) * 10 * Number(b[1]) +
    Number(a[2]) * Number(b[1]);

  num3 +=
    Number(a[0]) * 100 * Number(b[0]) +
    Number(a[1]) * 10 * Number(b[0]) +
    Number(a[2]) * Number(b[0]);

  sum += num1 + num2 * 10 + num3 * 100;

  const result = [num1, num2, num3, sum];

  for (v of result) {
    console.log(v);
  }
};

operation(input[0], input[1]);
