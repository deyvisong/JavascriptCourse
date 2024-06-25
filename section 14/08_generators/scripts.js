'use strict';
function* idCreator() {
  let id = 0;
  while(true) {
    yield id++;
  }
}

let newId = idCreator();

console.log(newId.next().value);
console.log(newId.next().value);

let newId2 = idCreator();
console.log(newId2.next().value);
