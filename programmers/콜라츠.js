function solution(num) {
    var answer = 0;

    function collatz(num) {
        if (num === 1) return (answer = 0);
        while (num !== 1) {
            num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
            answer++;
            if (answer > 499) return (answer = -1);
        }

        // if (num === 1) return (answer = 0);
        // if (answer > 499) return (answer = -1);
        // if (num % 2 === 0) {
        //     num = num / 2;
        //     answer++;
        //     if (num === 1) return;
        //     else collatz(num);
        // } else {
        //     num = num * 3 + 1;
        //     answer++;
        //     if (num === 1) return;
        //     else collatz(num);
        // }
    }
    collatz(num);
    return answer;
}

console.log(solution(626331));
