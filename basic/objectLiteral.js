var sayNode = function () {
  console.log("Node");
};
var es = "ES";
var oldObject = {
  sayJS: function () {
    console.log("JS");
  },
  sayNode: sayNode,
};
oldObject[es + 6] = "Fantastic";

oldObject.sayNode(); //Node
oldObject.sayJS(); //JS
console.log(oldObject.ES6); //Fantastic

//---------------------------------------------------

const newObject = {
  sayJS() {
    //콜론(:), function 붙이지 않아도 됨
    console.log("JS");
  },
  sayNode, //속성명과 변수명이 겹치는 경우 한번만 적음
  [es + 6]: "Fantastic",
};
newObject.sayNode(); //Node
newObject.sayJS(); //JS
console.log(oldObject.ES6); //Fantastic
