let nomes = ["Deyvison", "David", "Deyvid", "Amor", "Filha"]

for(i = 0; i < nomes.length; i++) {
  if(nomes[i].toLowerCase() == "deyvison") {
    console.log("Seu nome existe no array")
  }
}

console.log(nomes.includes("Deyvison") ? "Sim" : "Não");
