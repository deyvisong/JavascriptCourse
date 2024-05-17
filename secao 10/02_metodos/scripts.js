const cachorro = {
  raca: "SRD",
  uivar: function() {
    console.log("Auuuuuuu")
  },
  rosnar: function() {
    console.log("Grrrrrr");
  },
  setRaca: function(raca) {
    this.raca = raca;
  },
  getRaca: function() {
    return "A raça é " + this.raca;
  }
}

let cachorroUivar = cachorro.uivar()
cachorro.rosnar()
console.log(cachorro.raca)


cachorro.setRaca("Pastor Alemão")
console.log(cachorro.getRaca())
