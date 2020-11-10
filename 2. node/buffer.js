/*
파일 읽고 쓰는 방식
1. 버퍼 방식, 영상을 재생할 수 있을 때까지 데이터를 모으는 방식
2. 스트림 방식, 영상 데이터를 조금씩 전송하는 방식
*/

const buffer = Buffer.from("버퍼로 바꾸기");
console.log("from():", buffer);
console.log("length:", buffer.length);
console.log("toString():", buffer.toString());

const array = [
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(array);
console.log("concat():", buffer2.toString());

const buffer3 = Buffer.alloc(5); // alloc(바이트) : 빈 버퍼가 생성됨, 지정 바이트만큼 버퍼 생성
console.log("alloc():", buffer3);
