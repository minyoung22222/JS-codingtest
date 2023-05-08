const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim();

let num = Number(input);

console.log((8 * num + 1) % 1000000000);
