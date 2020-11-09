/*
url.format() : 분해된 URL 객체를 다시 원래 상태로 조립

url : parse 차이점
searchParams : query
username, password : auth
*/
const url = require("url");

const URL = url.URL; // WHATWG 방식으로 분해
const myURL = new URL(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));

console.log("---------------------------------------------");

const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));
