function solution(c, arr) {
  let answer = 0;
  let n = arr.length;

  function DFS(L, sum) {
    if (c < sum) {
      return;
    }
    if (L === n) {
      answer = Math.max(sum, answer);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
