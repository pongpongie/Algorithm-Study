const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const operation = (a, b, c) => {
  const _a = Number(a);
  const _b = Number(b);
  const _c = Number(c);
  console.log((_a + _b) % _c);
  console.log(((_a % _c) + (_b % _c)) % _c);
  console.log((_a * _b) % _c);
  console.log(((_a % _c) * (_b % _c)) % _c);
};

operation(input[0], input[1], input[2]);