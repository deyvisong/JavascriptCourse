class Conta{
  constructor(saldoCorrente, saldoPoupanca, juros) {
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.juros = juros;
  }
  // Metodo que efetua deposito
  deposito(valor) {
    this.saldoCorrente += valor;
    console.log(`Depósito efetuado com sucesso, valor disponível: ${this.saldoCorrente}`)
  }
  // Metodo que efetua o saque caso possua valor disponível para isso
  saque(valor) {
    if(valor > this.saldoCorrente) {
      console.log(`Você não possui saldo suficiente , disponivel: ${this.saldoCorrente}`)
    } else {
      this.saldoCorrente -= valor;
    }
  }
  transferCorrenteParaPoupanca(valor) {
    if(valor > this.saldoCorrente) {
      console.log(`Não foi possível realizar a transferência, dinheiro insulficiente, você possui ${this.saldoCorrente}`)
    } else {
      this.saldoPoupanca += valor;
      this.saldoCorrente -= valor;
      console.log(`Valor transferido com sucesso, saldo atual em poupança: ${this.saldoPoupanca} e conta corrente: ${this.saldoCorrente}`)
    }
  }

  transferPoupancaParaCorrente(valor) {
    if(valor > this.saldoPoupanca) {
      console.log(`Não foi possível realizar a transferência, dinheiro insulficiente, você possui ${this.saldoPoupanca}`)
    } else {
      this.saldoPoupanca -= valor;
      this.saldoCorrente += valor;
      console.log(`Valor transferido com sucesso, saldo atual em poupança: ${this.saldoPoupanca} e conta corrente: ${this.saldoCorrente}`)
    }
  }
  jurosDeAniversário() {
    let juros = (this.saldoPoupanca * this.juros) / 100;
    this.saldoPoupanca += juros;
  }
}

class ContaEspecial extends Conta {
  constructor(saldoCorrente, saldoPoupanca, juros) {
    super(saldoCorrente, saldoPoupanca, juros*2)
  }
}

let conta = new Conta(1000,5000,1);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transferCorrenteParaPoupanca(3000);

console.log(conta);

conta.jurosDeAniversário();

console.log(conta);

let contaspecial = new ContaEspecial(1000,5000)
