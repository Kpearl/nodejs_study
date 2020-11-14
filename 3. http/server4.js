const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map((v) => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      // reduce : return 값 누적, 하나의 결과값 반환
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expries = new Date();
      expries.setMinutes(expries.getMinutes() + 5); // 쿠키 만료 시간 5분 뒤로 설정
      res.writeHead(302, {
        Location: '/',
        'Set-Cookie': `name=${encodeURIComponent(
          name
        )};Expires=${expries.toGMTString()}; HttpOnly; Path=/`,
      }); // HttpOnly : JS에서 쿠키 접근 불가, 쿠키 조작 방지
      res.end();
    } else if (cookies.name) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      fs.readFile('./server4.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
  })
  .listen(8080, () => {
    console.log('8080 포트에서 서버 대기 중');
  });
