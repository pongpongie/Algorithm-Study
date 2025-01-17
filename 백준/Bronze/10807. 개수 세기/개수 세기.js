const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

const t = input[0];
const arr = input[1].split(" ").map(Number);
const num = Number(input[2]);

const countElem = (t) => {
  let cnt = 0;
  for (elem of arr) {
    if (elem === num) {
      cnt++;
    }
  }
  console.log(cnt);
};

countElem(t);
