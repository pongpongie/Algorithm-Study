const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim(" ")
  .split("\n");

const n = Number(input[0]);
const score = input[1].split(" ").map(Number);

let m = 0;
let mean = 0;

for (elem of score) {
  if (m < elem) {
    m = elem;
  }
}

for (let i = 0; i < n; i++) {
  score[i] = (score[i] / m) * 100;
  mean += score[i];
}

console.log(mean / n);
