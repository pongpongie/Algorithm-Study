const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].split(" ");
  answer += `Case #${i}: ` + `${Number(arr[0]) + Number(arr[1])}` + "\n";
}

console.log(answer);