function solution(cacheSize, cities) {
    var answer = 0;
    let cachearr = Array.from({ length: cacheSize });

    let data = cities.map((v) => {
        return v.toUpperCase();
    });
    data.forEach((item) => {
        if (!cachearr.includes(item)) {
            cachearr.push(item);
            answer += 5;
            cachearr.shift();
        } else {
            cachearr.push(item);
            answer += 1;
            cachearr.splice(cachearr.indexOf(item), 1);
        }
    });
    return answer;
}

// console.log(solution(0, ["LA", "LA"]));
