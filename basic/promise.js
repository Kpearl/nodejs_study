//promise : 비동기 처리에 사용되는 객체, callback 과 달리 depth가 더 깊어지지 않아 callback hell을 극복할 수 있음
//callback hell : 비동기 처리시 콜백함수를 사용했을 때 발생하는 문제, 콜백이 겹쳐져 있는 구조

const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

//---------------------------------------------------

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

//---------------------------------------------------

function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => {
    if (err) {
      return console.error(err);
    }
    user.name = "zero";
    user.save((err) => {
      if (err) {
        return console.error(err);
      }
    });
  });
}

// change

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      return user.save();
    })
    .catch((err) => {
      console.error(err);
    });
}

//

const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(err);
  });
