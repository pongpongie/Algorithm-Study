const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const mul = (a, b) => {
 console.log(Number(a) * Number(b))
};

mul(input[0], input[1]);