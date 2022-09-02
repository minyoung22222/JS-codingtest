function solution(nums) {
    var answer = 0;
    let length = nums.length / 2;
    // let result = nums.filter((v, i) => nums.indexOf(v) === i);
    let result = [...new Set(nums)];
    answer = Math.min(length, result.length);
    return answer;
}

const nums = [3, 1, 2, 3];
solution(nums);
