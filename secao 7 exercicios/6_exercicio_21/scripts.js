function tipoDado(dado) {
  if((typeof(dado)) === "boolean") {
    console.log("É Boolean");
  } else if(typeof(dado) === "string") {
    console.log("É String")
  } else if(typeof(dado) === "number") {
    console.log("É um número")
  }
}

tipoDado("4e3efe");
