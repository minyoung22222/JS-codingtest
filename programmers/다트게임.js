function solution(dartResult) {
    var answer = 0;
    let score = 0;
    let score_arr = [];

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            dartResult[i - 1] === "1"
                ? (score = 10)
                : (score = Number(dartResult[i]));
            console.log(dartResult[i - 1] === "1");
        } else if (dartResult[i] === "S") {
            score_arr.push(score);
        } else if (dartResult[i] === "D") {
            score_arr.push(Math.pow(score, 2));
        } else if (dartResult[i] === "T") {
            score_arr.push(Math.pow(score, 3));
        } else if (dartResult[i] === "*") {
            score_arr[score_arr.length - 2] =
                score_arr[score_arr.length - 2] * 2;
            score_arr[score_arr.length - 1] =
                score_arr[score_arr.length - 1] * 2;
        } else if (dartResult[i] === "#") {
            score_arr[score_arr.length - 1] =
                score_arr[score_arr.length - 1] * -1;
        }
    }
    answer = score_arr.reduce((a, b) => a + b, 0);
    return answer;
}

console.log(solution("1D2S#10S"));
