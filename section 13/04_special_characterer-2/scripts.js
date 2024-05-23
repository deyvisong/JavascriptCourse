'use strict'

const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length ==  2);

const palavraTresLetras = /\w\w\w/; // at least 3 characterers

console.log(palavraTresLetras.test("2019"));
console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("05"));
