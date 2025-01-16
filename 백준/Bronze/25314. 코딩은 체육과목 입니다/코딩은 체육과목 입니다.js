const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = Number(fs.readFileSync(filePath, "utf-8").toString());

const printLong = (num) => {
  let str = "";
  for (let i = 0; i < num / 4; i++) {
    str += "long ";
  }
  str += "int";
  console.log(str);
};

printLong(input);