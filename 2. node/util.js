/*
deprecated : 중요도가 떨어져서 사라지게 될 기능
*/
const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 deprecated 되었으니 더 이상 사용하지 마시오.");
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes); // promisify : new Promise 로 감싸주지 않아도 간단히 promise 로 사용 가능
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
