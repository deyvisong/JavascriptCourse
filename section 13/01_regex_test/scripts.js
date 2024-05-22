const reg1 = new RegExp('ball');

console.log(reg1.test("where is the ball?"));
console.log(reg1.test("dont have"));

const reg2 = new RegExp(/\d+/);

console.log(reg2.test("0123wherearead"))
