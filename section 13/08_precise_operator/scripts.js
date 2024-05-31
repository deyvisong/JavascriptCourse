'use strict'

const cep = /\d{5}-\d{3}/;

console.log(cep.test("50670-350"));
console.log(cep.test("asd"));
