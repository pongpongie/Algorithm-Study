const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("/n");

let str1 = input[0].trim().split(" ");
let cnt = 0;

if (str1[0] == "") {
  cnt = 0;
} else {
  for (v of str1) {
    cnt++;
  }
}

console.log(cnt);
