function greeting(name) {
  if(typeof name != 'string') {
    throw new Error("You need to insert a string");
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting("Deyvison");
greeting(5);

console.log("Teste")
