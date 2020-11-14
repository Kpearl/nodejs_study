const http = require("http");

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" }); // 쿠키는 부가적인 정보이므로 헤더에 저장
    res.end("Hello Cookie");
  })
  .listen(8080, () => {
    console.log("8080 포트에서 서버 대기중");
  });
/*
HTTP 상태 코드
200(성공) / 201(작성됨)
301(영구이동) / 302(임시이동)
401(권한없음) / 403(금지됨)
500(내부 서버 오류) / 502(불량 게이트웨이) / 503(서비스를 사용할 수 없음)

Rest Parameter
: 정해지지 않은 파라미터를 받아올때 Spread Operator를 사용하여 배열 형식으로 가져오는 것
ex) function test (...param) {}

Spread Operator ( ... )
: 배열이면 원소 나열, 오브젝트이면 프로퍼티 나열 -> 개별 요소로 분리
*/
