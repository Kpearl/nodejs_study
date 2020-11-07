//promise : 비동기 처리에 사용되는 객체, callback 과 달리 depth가 더 깊어지지 않아 callback hell을 극복할 수 있음
//callback hell : 비동기 처리시 콜백함수를 사용했을 때 발생하는 문제, 콜백이 겹쳐져 있는 구조

const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공"); //then 실행
  } else {
    reject("실패"); //catch 실행
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// or

promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.error(error);
  });

// callback 중첩을 Promise.all로 변환

const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ['성공1', '성공2']
  })
  .catch((error) => {
    console.error(err);
  });
