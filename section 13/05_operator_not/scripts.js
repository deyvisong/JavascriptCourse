'use strict'

const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("here has a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("123 as"));
