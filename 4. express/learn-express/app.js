var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // 요청 쿠키 해석
var logger = require('morgan'); // 요청 정보 콘솔에 기록
var session = require('express-session'); // 세션 관리 미들 웨어, 직접 설치
var flash = require('connect-flash'); // 일회성 메시지 웹 브라우저 노출, 직접 설치
// body-parser : 요청의 본문해석하는 미들웨어, 보통 form&AJAX 요청 데이터 처리 / 익스프레스 4.16 부터 내장

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use 메서드 인자로 들어 있는 함수 => 미들웨어
// 순차적으로 미들웨어 실행 후 라우터에서 클라이언트로 응답
// 라우터, 에러 핸들러도 미들웨어의 일종

app.use(function(req, res, next) {
  console.log(req.url, '미들웨어 만들기');
  next(); // *** 미들웨어 안에 next()를 호출해야 다음 미들웨어로 넘어감 ***
  // 인자 : () => 다음 미들웨어 / route => 다음 라우터 / error => 다음 핸들러
});

// 순차구조이기 때문에 차례 고려해서 선언
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// session 내부에서 cookieParser를 사용한 버전이 있기 때문에 cookieParser 뒤에 두는 것이 좋음
app.use(cookieParser('secret code'));
app.use(session({
  resave: false, // 세션 수정이 없을 경우 재저장 여부
  saveUninitialized: false, // 세션 내역 없을 시 세션 저장 여부
  secret: 'secret code',
  cookie: { // 세션 관리 시 클라이언트에 쿠키 보냄 (세션쿠키)
    httpOnly: true,
    secure: false,
  },
}));

app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;