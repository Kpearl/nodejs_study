/* 
비구조화 할당
= 배열이나 객체의 요소를 해체하여 별개의 변수로 추출
*/

var candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};

//--------------------------------------

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// change

const {
  getCandy,
  status: { count },
} = candyMachine;
