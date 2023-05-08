function solution(n, arr) {
  let answer = Array.from({ length: n }).fill(0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < n; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 0; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// push 하고 같은 숫자가 없으면 pop
// 같은 숫자가 있으면 그 숫자 splice
