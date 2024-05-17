let frase = "Testando o método split";

console.log(frase);
console.log(frase.split(" "));

let palavras = frase.split(" ");

console.log(palavras)

let produtos = "Banana;Maçã;Jaca;Pera;Bola;Tapete";

let palavras2 = produtos.split(";")

console.log(palavras2);

palavras2.forEach(num => {
  console.log(num)}
  )
