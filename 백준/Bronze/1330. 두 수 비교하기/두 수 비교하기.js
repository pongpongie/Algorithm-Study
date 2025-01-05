
const fs = require("fs");
const filePath = process.platform == "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

if (Number(input[0]) > Number(input[1])) {
  console.log(">");
} else if (Number(input[0]) < Number(input[1])) {
  console.log("<");
} else {
  console.log("==");
}
