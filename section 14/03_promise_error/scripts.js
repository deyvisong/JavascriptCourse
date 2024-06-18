'uses strict'
let p = Promise.resolve(new Error("It doesn't work"));

console.log("Something");

p.then(value => console.log(value)).catch(reason=> console.log("Eror "+ reason));
