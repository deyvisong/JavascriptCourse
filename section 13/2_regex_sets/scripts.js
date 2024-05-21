const reg1 = /[12345]/;

// return false
console.log(reg1.test("we have the number 6"));

// return true
console.log(reg1.test("we have the number 2"));

// this rex wanna verify if we have numbers in our string
const reg2 = /[0-9]/;

console.log(reg2.test("we have the number 65"));

// return false
console.log(reg2.test("we have a number"));
