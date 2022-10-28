function solution(numbers) {
    var answer = 0;
    let len = numbers.length;
    let ch = Array.from({ length: len }, () => 0);
    let arr = new Set();

    function primeNum(n) {
        if (n <= 1) return false;
        for (let m = 2; m <= Math.sqrt(n); m++) {
            if (n % m === 0) return false;
        }
        return true;
    }

    function DFS(L, num) {
        if (L === len) return;
        else {
            for (let i = 0; i < len; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    let word = num + numbers[i];
                    arr.add(Number(word));
                    DFS(L + 1, word);
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0, "");

    arr.forEach((v) => {
        if (primeNum(v)) answer++;
    });
    return answer;
}

console.log(solution("1231"));
