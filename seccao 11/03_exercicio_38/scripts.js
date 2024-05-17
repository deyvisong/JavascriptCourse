class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;

  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }

  get obterRua() {
    return this.rua
  }


}

let endereco = new Endereco("Rua gaspar perez n 28", "Iputinga", "Recife", "Pernambuco")

console.log(endereco)

endereco.novaRua = "Rua do passarinho";

console.log(endereco)
console.log(endereco.obterRua)
