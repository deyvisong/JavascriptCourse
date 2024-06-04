'use strict'

const dateValidation = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[2-9][0-9]|20[01][0-9]|2020)$/;

console.log(dateValidation.test("24/04/1989")); // true
console.log(dateValidation.test("02/04/1989")); // true
console.log(dateValidation.test("2/04/1989"));  // false
