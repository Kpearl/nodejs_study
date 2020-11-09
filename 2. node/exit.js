/*
process.exit() : 수동으로 서버를 멈추게 함으로 거의 사용하지 않음 (0 or 인자 없음 === 정상종료, 1 === 비정상종료)
*/

let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log("종료!");
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);
