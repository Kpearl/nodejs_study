const fs = require("fs");

fs.access(
  "./folder",
  fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,
  //F_OK : 파일 존재 여부, R_OK : 읽기 권한 여부, W_OK : 쓰기 권한 여부
  (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        //ENOENT (Error No Entry) :  no such file or directory
        console.log("폴더 없음");
        fs.mkdir("./folder", (err) => {
          if (err) {
            throw err;
          }
          console.log("폴더 만들기 성공");
          fs.open("./folder/file.js", "w", (err, fd) => {
            // open : 파일 아이디를 가져오는 메소드
            // w :  쓰기, r : 읽기, a : 기존 파일에 추가
            // 옵션이 w일 경우 파일이 없으면 파일을 만들어 아이디를 가져옴
            // 옵션이 r일 경우 읽을 파일이 없으면 에러 발생
            if (err) {
              throw err;
            }
            console.log("빈 파일 만들기 성공", fd);
            fs.rename("./folder/file.js", "./folder/newfile.js", (err) => {
              if (err) {
                throw err;
              }
              console.log("이름 바꾸기 성공");
            });
          });
        });
      } else {
        throw err;
      }
    } else {
      console.log("이미 폴더 있음");
    }
  }
);
