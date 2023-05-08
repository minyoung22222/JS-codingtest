function solution(m, ps, pt) {
  let answer = 0;
  function DFS(L, ssum, tsum) {
    if (tsum > m) return;
    if (L === ps.length) {
      answer = Math.max(answer, ssum);
    } else {
      DFS(L + 1, ps[L] + ssum, pt[L] + tsum);
      DFS(L + 1, ssum, tsum);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7]; // 점수
let pt = [5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt));
