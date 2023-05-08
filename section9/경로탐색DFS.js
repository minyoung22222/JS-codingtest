function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  console.log(graph);
  console.log(ch);

  function DFS(L) {
    if (L === n) {
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[L][i] === 1 && ch[L][i] === 0) {
          ch[L][i] = 1;

          DFS(i);
          ch[L][i] = 0;
        }
      }
    }
  }
  ch[1][1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
