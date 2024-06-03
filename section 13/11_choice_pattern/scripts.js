'use strict'

const reg = /\w+: (Deyvison|Alves|Ghessi)/; // Pay atention of spaces between "|";

console.log(reg.test("Nome: Deyvison"));
console.log(reg.test("Nome: Alves"));
console.log(reg.test("Silva"));
