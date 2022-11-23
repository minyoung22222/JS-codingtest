function solution(n) {
    let dy = [0, 1, 2];
    for (let i = 3; i <= n + 1; i++) {
        dy[i] = dy[i - 1] + dy[i - 2];
    }
    return dy[n + 1];
}

console.log(solution(7));
