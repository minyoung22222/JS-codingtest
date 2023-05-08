// 합이 같은 부분집합(DFS: 아마존 인터뷰)

function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0); // arr의 총합
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return; // flag가 true면 return
    if (L === n) {
      // L이 arr의 길이와 같으면 (arr개수보다 1개 더 많아질 때)
      if (total - sum === sum) {
        // 총합에서 부분합을 뺀값이 부분합과 같으면
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]); // 왼쪽 트리는 L번째 까지 값까지 더한 값
      DFS(L + 1, sum); // 오른쪽 트리는 L번째 전까지 더한 값
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
