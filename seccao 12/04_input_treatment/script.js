function checkNumber(num) {
  let number = Number(num);
  if(Number.isNaN(number)) {
    console.log("Please, insert only numbers")
  } else {
    return number;
  }
}

console.log(checkNumber(5));
checkNumber("nand")
