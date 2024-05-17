let nomes = ["Deyvison", "David", "Deyvid", "Amor", "Filha"]
let animais = ["Fiel", "Jean", "Gato", "Cachorro"]

function verificarTamanho(arr){
  if(arr.length >= 5) {
    console.log("Muitos elementos")
  } else {
    console.log("Poucos elementos")
  }
}

verificarTamanho(nomes)
verificarTamanho(animais)
