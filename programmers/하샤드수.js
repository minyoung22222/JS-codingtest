function solution(x) {
    var answer = true;
    let sum = 0;
    let arr = (x + "").split("");

    for (let num of arr) {
        sum += parseInt(num);
    }
    if (x % sum !== 0) answer = false;
    return answer;
}
