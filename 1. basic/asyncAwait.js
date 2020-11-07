/* 
async/await : 비동기 처리 패턴, 콜백 함수와 프로미스의 단점을 보완해줌
*/

function findAndSaveUser1(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .catch((err) => {
      console.error(err);
    });
}

/* 
change : 일반 함수 대신 async function으로 교체, Promise 앞에 await 붙여줌
*/

const findAndSaveUser2 = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.error(error);
  }
};

// Promise.all 대신 for await of 사용하기

const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();
