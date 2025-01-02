const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const sub = (a, b) => {
  console.log(Number(a) - Number(b));
};

sub(input[0], input[1]);
