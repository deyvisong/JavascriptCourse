let onibus = {
  rodas: 8,
  passageiros: 40,
  portas: 2,
};

console.log(onibus.rodas)
console.log(onibus.passageiros)
console.log(onibus.portas)

delete onibus.rodas
console.log(onibus)
onibus.rodas = 8;
console.log(onibus)

console.log(onibus.rodas)
