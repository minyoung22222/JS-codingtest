const fs = require("fs");
const input = fs
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

let len = input.length;
let arr = [0, 1, 2, 4];

for (let i = 4; i <= 10; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}

for (let j = 0; j < len; j++) {
  console.log(arr[input[j]]);
}
