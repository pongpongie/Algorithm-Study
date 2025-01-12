var fs = require('fs');
var input = fs.readFileSync('dev/stdin').toString().split('\n');
var [a,b] = input[0].split(' ').map(Number)
var c= Number(input[1])
let answer=(a*60+b+c)%1440
console.log(parseInt(answer/60)+' '+answer%60)

