const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

const subAb = (cases) => {
  for (let i = 1; i <= cases; i++) {
    console.log(Number(input[i][0]) + Number(input[i][2]));
  }
};

subAb(input[0]);