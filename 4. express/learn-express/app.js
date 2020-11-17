var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); // 요청 정보 콘솔에 기록
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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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