function solution(n) {
  let answer = 0;
  function DFS(L, mul) {
    if (L === 0) return (answer = mul);
    else {
      DFS(L - 1, mul * L);
    }
  }
  DFS(n, 1);
  return answer;
}

console.log(solution(5));
