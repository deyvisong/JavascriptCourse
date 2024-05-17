function imprimirNoConsole() {
  console.log("Um texto");
}

imprimirNoConsole()

function imprimirUmNumero(num) {
  console.log(`O número é: ${num}`);
}

imprimirUmNumero(2);

const numeroAleatorio = function() {
  console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

const soma = function(a, b) {
  return a + b
}

console.log(soma(3, 5));

const saudacao = function(nome) {
  if (nome == "Deyvison") {
    console.log("Olá Deyvison")
  } else {
    console.log("Você não é o Deyvison")
  }
}

saudacao("Deyvisons");

function multiplicarTresNumero(x, y, z) {
  return x * y * z;
}
console.log(multiplicarTresNumero(2,3,4));
