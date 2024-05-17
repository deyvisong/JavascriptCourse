const calculadora = {
  soma: function(a, b) {
    return a + b;
  },
  subtrair: function(a, b) {
    return a - b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    return a / b;
  }
}

console.log(calculadora.soma(5,3))
console.log(calculadora.multiplicar(3,5))
console.log(calculadora.dividir(30,5))
console.log(calculadora.subtrair(15,8))
