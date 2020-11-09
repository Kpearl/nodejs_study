/*
setTimeout(콜백 함수, 밀리초) : 주어진 밀리초 이후 콜백 함수 실행
setInterval(콜백 함수, 밀리초) : 주어진 밀리초마다 콜백 함수 반복 실행
setImmediate(콜백 함수) : 콜백 함수 즉시 실행

clearTimeout, clearInterval, clearImmediate : 타이머 취소
*/
const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다.");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다.");
});

clearImmediate(immediate2);
