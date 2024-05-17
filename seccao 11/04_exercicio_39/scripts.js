class Carro {
  constructor(marca, cor, gasolinaRestante = 100, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }
  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecer(abastecer) {
    this.gasolinaRestante += abastecer;
    console.log(`Veículo abastecido : ${this.gasolinaRestante}`)
  }

  get obterGasolinha() {
    return this.gasolinaRestante
  }

}

let lamborghini = new Carro("Lamborghini", "Preto", 100, 14)

console.log(lamborghini)




lamborghini.dirigir(100);

console.log(lamborghini)
