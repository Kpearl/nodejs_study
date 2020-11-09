setImmediate(() => {
  console.log("immediate");
});
process.nextTick(() => {
  console.log("nextTick");
});
setTimeout(() => {
  console.log("timeout");
}, 0);
Promise.resolve(0).then(() => console.log("promise"));

//nextTick
//promise
//timeout
//immediate

/*
nextTick, Promise는 다른 콜백보다 우선시됨 => 'Microtask' 라고 부름
* microtack를 재귀 호출하면 이벤트 루프에서 다른 콜백함수 들을 실행하지 않을 수 있음 *
*/
