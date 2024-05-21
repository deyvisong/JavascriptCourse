//let c = 2;
try {
  let a = 2 + b;

} catch(e) {

  console.log(e.message);
  //throw the new error;

}

console.log('test');

try {
  let a = b + 2;
} catch (e) {
  console.log(e);
} finally {
  console.log("Executed!");
}

console.log('test');
