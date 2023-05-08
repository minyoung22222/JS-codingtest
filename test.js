function solution(numbers, k) {
  var answer = 0;
  let len = numbers.length;
  //   let arr = [];
  //   for (let i = 0; i < len; i++) {
  //     if (Math.abs(numbers[i] - numbers[i + 1]) > k) {
  //       for (let j = i + 1; j < len; j++) {
  //         if (numbers[j] > numbers[i] && numbers[j] <= numbers[i + 1]) {
  //           arr.push(numbers[j]);
  //         }
  //       }
  //       for (let a of arr) {
  //         let idx = numbers.indexOf(a);
  //         if (
  //           Math.abs(a - numbers[i + 1]) <= k &&
  //           Math.abs(numbers[i] - numbers[idx - 1]) <= k &&
  //           Math.abs(numbers[i] - numbers[idx + 1]) <= k
  //         ) {
  //           numbers[i] = numbers[idx];
  //           numbers[idx] = numbers[i];
  //           answer++;
  //           break;
  //         }
  //       }
  //     }
  //   }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let tmp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = tmp;
      if (
        Math.abs(numbers[j] - numbers[j - 1] > k) &&
        Math.abs(numbers[j] - numbers[j + 1] > k)
      ) {
        let tmp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = tmp;
      } else {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution([3, 7, 2, 8, 6, 4, 5, 1], 3));
