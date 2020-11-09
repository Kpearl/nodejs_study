/*
단방향 암호화 : 비밀번호 등 보안이 필요한 데이터에 사용

createHash : 사용할 해시 알고리즘 설정 ( md5, sha1은 취약점이 발견되어 추천하지 않음 )
update : 변환할 문자열
digest : 인코딩할 알고리즘 ( base64가 문자열이 가장 짧음 )
*/
const crypto = require("crypto");

console.log(
  "base64:",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
console.log(
  "hex:",
  crypto.createHash("sha512").update("비밀번호").digest("hex")
);
console.log(
  "base64:",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
