# express-generator  
기본 폴더 구조와 package.json 잡아주는 패키지

<br>

### 1. express-gemerator 전역 설치
~~~
npm i -g express-generator
~~~
관리자 권한을 원할수도 있기 때문에 위의 명령어로 설치가 되지 않을 경우 아래 명령어로 설치 (npm i = npm install)
~~~
sudo npm i -g express-generator
~~~

<br>

### 2. learn-express 라는 프로젝트 생성
~~~
express learn-express --view=pug
~~~

<br>

### 3. npm 설치
learn-express 폴더로 이동 + npm 설치
~~~
cd learn-express && npm i
~~~

<br>

### 4. 폴더 구조
learn-express  
+-- bin  
| +-- www // 서버 실행 스크립트  
+-- node_modules  
+-- public  // 외부 접근 가능 파일  
+-- routes  // 서버 로직 작성(Control 역할)  
+-- model/schemas  // 기본 제공X, 데이터 관련(Model 역할)  
+-- views  // 템플릿 파일(View 역할)  
+-- app.js  // 핵심 서버 역할  
+-- package.json  
