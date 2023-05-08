function solution(arr) {
  //   return arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));

// 5 13 11 7 23 15
// 5 7 13 11 23 15
// 5 7 11 13 23 15
// 5 7 11 13 15 23
