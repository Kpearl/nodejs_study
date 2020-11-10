/*
try/catch 로 에러를 잡을 경우 프로세스가 멈추는 문제 발생
: throw 를 사용하여 서버가 죽지 않도록 하거나 uncaughtException 이벤트를 발생하여 프로세스 유지
공식적으로 uncaughtException 후 동작을 보장할 수 없기 때문에 에러 내용만 기록하고 프로세스 종료 권장
*/
process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("서버 고장");
}, 1000);

setTimeout(() => {
  console.log("실행");
}, 2000);
