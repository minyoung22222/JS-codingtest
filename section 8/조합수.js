function solution(n, r) {
  let answer = 0;

  function DFS(n, r) {
    if (n === r) return (answer += 1);
    else if (r === 1) return (answer += n);
    else {
      DFS(n - 1, r - 1);
      DFS(n - 1, r);
    }
  }
  DFS(n, r);

  return answer;
}

console.log(solution(5, 3));
