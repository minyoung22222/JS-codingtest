// function solution(n, words) {
//     var answer = [0, 0];
//     let arr = words.slice(1);

//     for (let i = 0; i < arr.length; i++) {
//         if (words[i][words[i].length - 1] !== arr[i][0]) {
//             (i + 1) % n === 0 ? (answer[0] = n) : (answer[0] = (i + 1) % n);
//             answer[1] = parseInt((i + 1) / n) + 1;
//             break;
//         }
//         for (let j = i + 1; j < words.length; j++) {
//             console.log(words[i], words[j]);
//             if (words[i] === words[j]) {
//                 console.log(j % n);
//                 (j + 1) % n === 0 ? (answer[0] = n) : (answer[0] = j % n);
//                 answer[1] = parseInt(j / n) + 1;
//             }
//         }
//     }

//     return answer;
// }

//

function solution(n, words) {
    let answer = [];
    let turn = 1;

    for (let i = 1; i < words.length; i++) {
        let pass =
            words[i - 1][words[i - 1].length - 1] === words[i][0] &&
            !words.slice(0, i).includes(words[i]);
        if (i % n === 0) turn++;
        if (!pass) return [(i % n) + 1, turn];
    }
}

let n = 3;
let words = [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
];
console.log(solution(n, words));
