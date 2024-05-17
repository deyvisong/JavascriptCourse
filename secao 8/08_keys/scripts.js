let obj = {
  'chave1': 1,
  'chave2': 2,
  'chave3': 3,
}

console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
for(let key in obj) {
  console.log(key ,obj[key])
}
