function solution(arr) {
  let answer = [];
  let sortArr = [...arr];
  sortArr.sort((a, b) => a - b);
  console.log(arr);
  console.log(sortArr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

// let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr = [120, 130, 150, 150, 130, 150];
console.log(solution(arr));

// 앞이랑 뒤랑 비교 (버블정렬) 해서 뒤에가 더 작으면 그 값 중 첫번째값은 현수 index+1
// 비교하다가 뒤에가 더 작다 하는데 두번재로 작다 그러면 그값은 짝꿍 그래서 그값의 index+1 반환
