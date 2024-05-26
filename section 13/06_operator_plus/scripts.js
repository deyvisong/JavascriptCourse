'use strict'

const oneOrMoreNumbers = /\d+/;

console.log(oneOrMoreNumbers.test("1518"));
console.log(oneOrMoreNumbers.test(""));
console.log(oneOrMoreNumbers.test("asdasdasd"));
