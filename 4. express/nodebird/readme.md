# express 기반 sns 서비스 만들기

~~~
nodebird 폴더 생성

npm init // package.json 생성

sudo npm i sequelize-cli

npm i sequelize mysql2

sequelize init

npm install nodemon

npm install cookie-parser

npm install morgan

npm install express-session

npm install connect-flash

npm i -D pug

sequlize db:create // 데이터베이스 생성

npm i multer // 파일 업로드 
~~~

<br>

### 폴더구조
nodebird  
+-- config  
+-- migrations  
+-- models  
+-- node_modules  
+-- passport  
+-- public  
+-- routes  
+-- seeders  
+-- views  
+-- app.js  
+-- package.json  

<br>

### module
dotenv // 환경 변수를 .env 파일에 저장하여 process.env로 로드하는 의존성 모듈
