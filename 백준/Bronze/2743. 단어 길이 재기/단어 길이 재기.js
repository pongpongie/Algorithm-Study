const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().trim();

console.log(input.length);
