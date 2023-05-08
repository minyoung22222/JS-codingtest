const fs = require("fs");
let input = fs
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

let arr = [0, 1, 1, 3];
console.log(input);
for (let i = 4; i <= input[input.length - 1]; i++) {
  arr[i] = arr[i - 1] - 1 + arr[i - 2] + (arr[i - 3] - 1);
}

for (let j = 0; j < input.length; j++) {
  console.log(arr[input[j]]);
}
