// 비동기 - 논블로킹 방식
const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번", data.toString());
});
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번", data.toString());
});
console.log("끝");

/*
비동기 메서드들은 파일 읽기 요청 후 다음 작업으로 넘어감
읽기가 완료되면 백그라운드에서 다시 메인 스레드로 알림을 주고 콜백 함수가 실행
= 백그라운드에서 각각의 요청 처리가 완료된 후 콜백 함수 처리 

동기 / 비동기 : 함수가 바로 return되는지 여부
블로킹 / 논블로킹 : 백그라운드 작업 완료 여부
 */
