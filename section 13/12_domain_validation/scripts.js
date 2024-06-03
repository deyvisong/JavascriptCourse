'use strict'

const domainValidation = /[?www.]\w+.com.br|.com/;

console.log(domainValidation.test("www.tibia.com"));
console.log(domainValidation.test("www.google.com.br"));
console.log(domainValidation.test("www.deyvison.org"));
console.log(domainValidation.test("deyvison.com"));
