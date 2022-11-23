function solution(arr) {
    let answer = 0;
    let dy = Array.from({ length: arr.length });
    dy[0] = 1;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i] && dy[j] > max) {
                max = dy[j];
            }
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
