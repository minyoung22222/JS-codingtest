function solution(d, budget) {
    var answer = 0;
    let arr = d.sort();
    let sum = 0;
    console.log(arr);

    for (let i = 0; i < d.length; i++) {
        sum += arr[i];
        if (sum > budget) break;
        answer++;
    }

    return answer;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;
console.log(solution(d, budget));
