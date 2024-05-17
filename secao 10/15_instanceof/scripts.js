class Mamifero {
  constructor(patas) {
    this.patas = patas;
    this.oreia = 2;
  }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }

  latir() {
    console.log("Au au");
  }
}

let pug = new Cachorro(4, "Pug");

console.log(pug.patas);
console.log(pug.oreia)

console.log(new Cachorro instanceof Mamifero)
console.log(coiote instanceof Mamifero)
