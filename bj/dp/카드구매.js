const fs = require("fs");
let [n, str] = fs.readFileSync("./test.txt").toString().split("\n");

n = parseInt(n);
let cards = str.split(" ").map((v) => Number(v));
let price = cards.map((v, i) => v / (i + 1));
let answer = 0;

let maxP = Math.max(...price);
function DFS(n) {
  if (n < maxP) {
    price.splice(price.indexOf(maxP), 1);
    maxP = Math.max(...price);

    answer += price[n];
  } else {
    answer += maxP;
    DFS(n - maxP);
  }
}

DFS(n);

console.log(price);
