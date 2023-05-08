function solution(n, k, arr, m) {
  let answer = 0;
  let ch = Array.from({ length: n }, () => 0);

  function DFS(L, sum, s) {
    if (L === k) {
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = s; i < n; i++) {
        // if (ch[i] === 0) {
        //   ch[i] = 1;
        DFS(L + 1, sum + arr[i], i + 1);
        //   ch[i] = 0;
        // }
      }
    }
  }
  DFS(0, 0, 0);

  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
