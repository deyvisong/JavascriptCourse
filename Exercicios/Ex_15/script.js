let num = 14 ;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

  if(num % i == 0) {
    divisoes++;
  }
}


if(divisoes == 2) {
  console.log(`The number ${num} is prime`);
} else {
  console.log(`The number ${num} isn't prime`);
}
