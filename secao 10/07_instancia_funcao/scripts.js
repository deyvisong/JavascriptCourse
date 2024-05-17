function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function() {
    console.log("AUuuuuu");
  }
}


let husky = new Cachorro('Husky', 4, 'cinza')

husky.uivar()
console.log(husky.patas)
