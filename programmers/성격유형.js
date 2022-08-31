function solution(survey, choices) {
    var answer = "";
    let result = {
        R: 0,
        T: 0,
        F: 0,
        C: 0,
        M: 0,
        J: 0,
        A: 0,
        N: 0,
    };
    survey.forEach((char, index) => {
        const [front, back] = char.split("");
        if (choices[index] < 4) {
            result[front] += Math.abs(choices[index] - 4);
        } else {
            result[back] += Math.abs(choices[index] - 4);
        }
    });

    result["R"] >= result["T"] ? (answer += "R") : (answer += "T");
    result["C"] >= result["F"] ? (answer += "C") : (answer += "F");
    result["J"] >= result["M"] ? (answer += "J") : (answer += "M");
    result["A"] >= result["N"] ? (answer += "A") : (answer += "N");

    return answer;
}

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];
console.log(solution(survey, choices));

// function solution(survey, choices) {
//     const MBTI = {};
//     const types = ["RT", "FC", "JM", "AN"];

//     types.forEach((type) => {
//         type.split("").forEach((char) => {
//             MBTI[char] = 0;
//             console.log(MBTI);
//         });
//     });

//     choices.forEach((choice, index) => {
//         const [disagree, agree] = survey[index];

//         MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//     });

//     return types
//         .map(([a, b]) => {
//             MBTI[b] > MBTI[a] ? b : a;
//             console.log("a:", a, "b: ", b, "MBTI: ", MBTI[a]);
//         })
//         .join("");
// }
