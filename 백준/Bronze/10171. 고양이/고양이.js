const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString();

const cat = () => {
  console.log("\\    /\\");
  console.log(" )  ( ')");
  console.log("(  /  )");
  console.log(" \\(__)| ");
};

cat();