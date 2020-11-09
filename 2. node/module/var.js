/*
module.exports === exports // true
* exports와 module exports는 참조 관계가 있으므로 한 모듈에서 exports와 module.exports 를 동시에 사용하지 않는 것이 좋음 *
*/
const odd = "홀수입니다.";
const even = "짝수입니다.";

module.exports = {
  odd,
  even,
};

/*
or

exports.odd = "홀수입니다.";
exports.even = "짝수입니다.";
*/
