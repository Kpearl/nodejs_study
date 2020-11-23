# Mongoose
ODM 이용하기 - MongoDB 편

<br>

~~~
express learn-mongoose --view=pug

cd learn-mongoose

npm i

npm install mongodb
~~~

<br>

## Schema
|Users|DataType|
|----|----|
|name|String|
|age|Number|
|married|Boolean|
|comment|String|
|createAt|Date|

|Comments|DataType|
|----|----|
|commenter|ObjectId|
|comment|String|
|createAt|Date|

<br>

## 기능
회원 : 등록/조회  
댓글 : 등록/조회/수정/삭제
