// function solution(n) {
//     let answer = 0;
//     let arr = [1, 2];
//     for (let i = 2; i < n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     answer = arr[n - 1];
//     return answer;
// }

function solution(n) {
  let answer = 0;
  let arr = Array.from({ length: n + 1 });

  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    answer = arr[i];
  }
  return answer;
}

console.log(solution(7));
