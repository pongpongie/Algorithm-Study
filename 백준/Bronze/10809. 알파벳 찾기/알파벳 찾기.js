const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().trim().split("");

let answer = new Array(26).fill(-1);

let str = "";

for (let i = 97; i <= 122; i++) {
  str += String.fromCharCode(i);
}

for (elem of str) {
  for (alpha of input) {
    if (elem === alpha) {
      answer[str.indexOf(elem)] = input.indexOf(elem);
      break;
    }
  }
}

console.log(answer.join(" "));
