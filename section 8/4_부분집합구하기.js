// 1~N 까지의 부분집합

function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // ch를 [0, 0, 0, 0, 0] 으로 초기화
  function DFS(L) {
    if (L === n + 1) {
      // L이 n보다 작을 떄까지만 해당 되므로
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          // 1로 체크되어있는 값만 tmp에 추가
          tmp += i + " ";
        }
      }
      if (tmp.length > 0) {
        // 공집합 제거
        answer.push(tmp.trim()); // 양 옆 공백 제거
      }
    } else {
      ch[L] = 1; // 1로 체크해놓기
      DFS(L + 1); // 왼쪽 트리
      ch[L] = 0; // 0으로 체크
      DFS(L + 1); // 오른쪽 트리
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
