function decrementa(num) {
  for(let i = num; i >= 0; i-- ) {
    if(i % 2 == 0){
      console.log(i)
    } else {
      continue
    }
  }
}

decrementa(20)
