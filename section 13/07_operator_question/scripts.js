'use strict'

const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

// ? it's optional characterer
const padrao2 = /\d+\w?/;

console.log(padrao2.test("123456e"));
console.log(padrao2.test("123456edqwd dd "));
