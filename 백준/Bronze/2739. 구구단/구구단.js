const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = Number(fs.readFileSync(filePath, "utf-8").toString());

const gugu = (num) => {
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

gugu(input);