const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 }); //highWaterMark : 버퍼 크기 정하는 옵션, 기본 값 64KB
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data : ", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end : ", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("error:", err);
});
