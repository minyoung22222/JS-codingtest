function solution(n, m) {
  let answer = [];
  let arr = [];

  function DFS(L) {
    if (L === m) {
      answer.push(arr.slice(0, 2));
      arr.splice(1, 1);
    } else {
      for (let i = 1; i <= n; i++) {
        arr.push(i);
        if (arr.length > m) {
          arr.shift();
        }
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(3, 2));
