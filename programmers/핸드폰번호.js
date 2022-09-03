function solution(phone_number) {
    var answer = "";
    let star = "*";
    answer += star.repeat(phone_number.length - 4);
    answer += phone_number.slice(phone_number.length - 4, phone_number.length);

    return answer;
}
