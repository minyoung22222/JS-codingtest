function solution(n, m) {
  let answer = [];
  let arr = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(L, s) {
    if (L === m) {
      answer.push(arr.slice());
    } else {
      for (let i = s; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          arr[L] = i;
          DFS(L + 1, i);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0, 1);

  return answer;
}

console.log(solution(4, 2));
