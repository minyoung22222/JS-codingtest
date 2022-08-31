function solution(n, lost, reserve) {
    var answer = 0;
    let arr = Array.from({ length: n }, () => 1); // 각 학생 별 체육복의 개수
    let students = Array.from({ length: n }, (v, i) => i + 1); // 1~n 학생 나열

    for (let i = 0; i < students.length; i++) {
        for (l of lost) {
            if (students[i] === l) {
                // lost중 students에서 같은 숫자가 있다면
                arr.splice(i, 1, arr[i] - 1); // arr에서 그 숫자에 -1 해준다.
            }
        }

        for (r of reserve) {
            if (students[i] === r) {
                // reserve중 students에서 같은 숫자가 있다면
                arr.splice(i, 1, arr[i] + 1); // arr에서 그 숫자에 +1 해준다.
            }
        }
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 0) {
            // 만약 체육복이 0인 학생이 있다면
            if (arr[j - 1] === 2) {
                // 그 학생 앞의 학생이 체육복이 2벌이라면
                arr.splice(j - 1, 1, arr[j - 1] - 1); // 앞의 학생의 체육복 -1
                arr.splice(j, 1, 1); // 0인 학생의 체육복을 1로
            } else if (arr[j + 1] === 2) {
                // 그 학생 뒤의 학생이 체육복이 2벌이라면
                arr.splice(j + 1, 1, arr[j + 1] - 1); // 뒤의 학생의 체육복 -1
                arr.splice(j, 1, 1); // 0인 학생의 체육복 1로
            }
        }
    }

    for (a of arr) {
        if (a >= 1) {
            // 체육복을 1개이상 가지고 있다면
            answer += 1;
        }
    }

    return answer;
}

const n = 3;
const lost = [3];
const reserve = [1];
console.log(solution(n, lost, reserve));
