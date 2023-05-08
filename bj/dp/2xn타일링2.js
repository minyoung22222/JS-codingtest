const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().trim();

let num = Number(input);
let answer = 0;
let arr = [1, 3];

for (let i = 2; i < num; i++) {
  arr[i] = (arr[i - 1] + 2 * arr[i - 2]) % 10007;
}

answer = arr[num - 1];
console.log(answer);
