function solution(n, lost, reserve) {
    var answer = 0;
    let arr = Array.from({ length: n }, () => 1);
    let students = Array.from({ length: n }, (v, i) => i + 1);

    for (let i = 0; i < students.length; i++) {
        for (l of lost) {
            if (students[i] === l) {
                arr.splice(i, 1, arr[i] - 1);
            }
        }
    }

    for (let i = 0; i < students.length; i++) {
        for (r of reserve) {
            if (students[i] === r) {
                arr.splice(i, 1, arr[i] + 1);
            }
        }
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 0) {
            if (arr[j - 1] === 2) {
                arr.splice(j - 1, 1, arr[j - 1] - 1);
                arr.splice(j, 1, 1);
            } else if (arr[j + 1] === 2) {
                arr.splice(j + 1, 1, arr[j + 1] - 1);
                arr.splice(j, 1, 1);
            }
        }
    }

    for (a of arr) {
        if (a >= 1) {
            answer += 1;
        }
    }

    return answer;
}
