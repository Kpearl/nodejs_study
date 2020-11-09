const url = require("url");
const querystring = require("querystring");

const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
const query = querystring.parse(parsedUrl.query); // query 부분을 객테로 분해
console.log("querystring.parse():", query);
console.log("querstring.stringify():", querystring.stringify(query)); // 분해된 query 다시 조립
