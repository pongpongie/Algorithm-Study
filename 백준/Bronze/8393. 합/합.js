const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = Number(fs.readFileSync(filePath, "utf-8").toString());

const summation = (num) => {
  console.log(Number((num * (num + 1)) / 2));
};

summation(input);