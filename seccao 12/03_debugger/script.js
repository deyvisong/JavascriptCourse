let a = 1;
let b = 2;
let c = 3;

if(c > a) {
  a = b;
}

for(let i = 5; i > 0; i--) {
  b++;
  a = a + c + 1;
  c += 2;
  debugger;
}

if(b == a) {
  a++;
} else {
  a = a + b + c;
}
debugger;
console.log(a)
a = a * b;

console.log(a)

debugger;

console.log("teste");
