/*
단방향 암호화

기존 문자열에 salt라는 특정값을 붙인 후 해시 알고리즘을 반복해서 적용
*/
const crypto = require("crypto");

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    // 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘
    console.log("password:", key.toString("base64"));
  });
});
