const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString();

const calScore = (score) => {
  const _score = Number(score);

  if (_score < 60) {
    console.log("F");
  } else if (_score < 70) {
    console.log("D");
  } else if (_score < 80) {
    console.log("C");
  } else if (_score < 90) {
    console.log("B");
  } else if (_score <= 100) {
    console.log("A");
  }
};

calScore(input);