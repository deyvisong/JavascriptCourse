'use strict';

function numberVerify(num) {
  return new Promise((resolve, reject) => {
    if (num === 2) {
      resolve(console.log(`The number is ${num}`));
    } else {
      reject(new Error("Error"));
    }
  });
}

numberVerify(2)
numberVerify(4)
