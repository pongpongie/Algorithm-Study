const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .split("\n")
  .map(Number);

let students = new Array(30);

for (let i = 1; i <= students.length; i++) {
  students[i - 1] = i;
}

const assginment = (num) => {
  let answer = [];
  for (let i = 0; i < students.length; i++) {
    let pivot = students[i];
    for (let j = 0; j < input.length + 1; j++) {
      if (j === input.length) {
        answer.push(pivot);
        break;
      }
      if (input[j] === pivot) {
        break;
      }
    }
  }
  answer.sort((a, b) => a - b);
  for (elem of answer) {
    console.log(elem);
  }
};

assginment(input.length);
