function solution(strings, n) {
    var answer = [];

    answer = strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        else return a > b ? 1 : -1;
    });
    return answer;
}

let strings = ["sun", "bed", "car"];
let n = 1;
console.log(solution(strings, n));
