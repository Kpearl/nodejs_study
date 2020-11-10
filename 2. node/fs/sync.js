// 동기 - 블로킹 방식
const fs = require("fs");

console.log("시작");
let data = fs.readFileSync("./readme2.txt");
console.log("1번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("2번", data.toString());
data = fs.readFileSync("./readme2.txt");
console.log("3번", data.toString());
console.log("끝");

/*
수백 개의 요청이 들어왔을 때 성능 문제 발생, 이전 작업 완료 전까지 메인 스레드 대기 상태
때문에 비동기 메서드가 효율적임
*/
