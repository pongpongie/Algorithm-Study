const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = Number(fs.readFileSync(filePath, "utf-8").toString());

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += "*";
  console.log(answer);
}
