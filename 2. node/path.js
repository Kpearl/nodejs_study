/*
Windows 에서 POSIX 스타일 path를 사용할 때
: path.posix.sep or path.posix.join()

POSIX 에서 Windows 스타일 path를 사용할 때
: path.win32.sep or path.win32.join()
*/
const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("----------------------------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.extname(string));
console.log("path.basename():", path.basename(string));
console.log("path.basename():", path.basename(string, path.extname(string)));
console.log("----------------------------------------------");
console.log("path.parse()", path.parse(string)); // 파일 경로를 root, dir, base, ext, name 으로 분리
console.log(
  "path.format():",
  path.format({
    dir: "C:\\Program Files\\vscode\\2. node",
    name: "path",
    ext: ".js",
  })
);
console.log(
  "path.normalize():",
  path.normalize("C://Program Files\\vscode\\2. node\\path.js") // 구분자 실수시 정상적인 경로로 변환
);
console.log("----------------------------------------------");
console.log("path.isAbsolute():", path.isAbsolute("C:\\")); // 절대 경로인지 상대경로인지 확인
console.log("path.isAbsolute():", path.isAbsolute("./home"));
console.log("----------------------------------------------");
console.log(
  "path.relative():",
  path.relative("C:\\Program Files\\vscode\\2. node\\path.js", "C:\\") //첫번째 인자에서 두번째 인자로 가는 방법을 알려줌
);
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/Program Files/vscode", ".", "/2. node") // 여러 인자를 하나의 경로로 합쳐줌 (상대경로도 처리해줌)
);
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "Program Files/vscode", ".", "/2. node") // '/'를 만나면 절대 경로로 인식하여 앞의 경로 무시, (출력: C:\2. node)
);
