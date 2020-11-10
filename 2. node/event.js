const EventEmitter = require("events");
const { on } = require("process");

const myEvent = new EventEmitter();
myEvent.addListener("event1", () => {
  console.log("이벤트 1");
});
myEvent.on("event2", () => {
  console.log("이벤트 2");
});
myEvent.on("event2", () => {
  console.log("이벤트 2 추가");
});
// on, addListener : 이벤트 이름과 이벤트 발생시 콜백 연결

myEvent.emit("event1");
myEvent.emit("event2");
// emit : 이벤트 호출

myEvent.once("event3", () => {
  console.log("이벤트 3");
});
myEvent.emit("event3");
myEvent.emit("event3");
// once : 이벤트 한번만 실행, 때문에 여러번 호출 했지만 event3 한번만 실행

myEvent.on("event4", () => {
  console.log("이벤트 4");
});
myEvent.removeAllListeners("event4");
myEvent.emit("event4");

const listener = () => {
  console.log("이벤트 5");
};
myEvent.on("event5", listener);
myEvent.removeListener("event5", listener);
myEvent.emit("event5");

console.log(myEvent.listenerCount("event2"));
