const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");
writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});

writeStream.write("글 쓰기\n");
writeStream.write("한번 더 쓰기");
writeStream.end();
