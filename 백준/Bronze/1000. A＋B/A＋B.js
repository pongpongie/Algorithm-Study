const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "node/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const sum = (a, b) => {
  console.log(Number(a) + Number(b));
};

sum(input[0], input[1]);
