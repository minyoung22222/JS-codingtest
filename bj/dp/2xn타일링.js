const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().trim();

let num = Number(input);
let answer = 0;
let arr = [1, 2];

for (let i = 2; i < num; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

answer = arr[num - 1] % 10007;
console.log(answer);
