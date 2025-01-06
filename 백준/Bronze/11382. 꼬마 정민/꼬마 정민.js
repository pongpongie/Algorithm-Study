const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

console.log(Number(input[0]) + Number(input[1]) + Number(input[2]));