let pessoa = {
  "nome": "Deyvison",
  "idade": 34,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"],
}

console.log(pessoa.nome)
let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0])
