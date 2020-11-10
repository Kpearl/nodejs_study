const fs = require("fs");

fs.readdir("./folder", (err, dir) => {
  // readdir : 폴더 안 내용물 확인
  if (err) {
    throw err;
  }
  console.log("폴더 내용 확인", dir);
  fs.unlink("./folder/newFile.js", (err) => {
    // unlink : 파일 삭제, 삭제하려는 파일이 없을 경우 에러 발생
    if (err) {
      throw err;
    }
    console.log("파일 삭제 성공");
    fs.rmdir("./folder", (Err) => {
      // rmdir : 폴더 삭제, 폴더 내 파일 있을 경우 에러 발생
      if (err) {
        throw err;
      }
      console.log("폴더 삭제 성공");
    });
  });
});
