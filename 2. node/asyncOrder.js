//비동기 방식 - 논블로킹 방식
const fs = require("fs");

console.log("시작");
fs.readFile("./readme2.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme2.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme2.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
    });
  });
});
console.log("끝");

// or primise 방식

console.log("시작");
Promise.resolve()
  .then(() => {
    fs.readFile("./readme2.txt", (err, data) => {
      console.log("1번", data.toString());
    });
  })
  .then(() => {
    fs.readFile("./readme2.txt", (err, data) => {
      console.log("2번", data.toString());
    });
  })
  .then(() => {
    fs.readFile("./readme2.txt", (err, data) => {
      console.log("3번", data.toString());
    });
  })
  .catch((error) => {
    console.error(error);
  });
console.log("끝");

// or async/await 방식

console.log("시작");
async function asyncAwait() {
  try {
    await fs.readFile("./readme2.txt", (err, data) => {
      console.log("1번", data.toString());
      console.log("2번", data.toString());
      console.log("3번", data.toString());
    });
  } catch (error) {
    console.error(error);
  }
}
console.log("끝");

asyncAwait();
