/*
console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time 과 timeEnd 사이의 시간 측정
console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용, 옵션(true : 색추가, depth : 객체 단계)
console.trace(레이블) : 에러 발생 위치 추적
* 컴퓨터 환경에 따라 time, trace가 다르게 측정될 수 있음 *
*/
const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};
console.time("전체 시간");
console.log("평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.");
console.log(string, number, boolean);
console.error("에러 메시지는 console.error에 담아주세요");

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {
  continue;
}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}
function a() {
  b();
}
a();

console.timeEnd("전체 시간");
