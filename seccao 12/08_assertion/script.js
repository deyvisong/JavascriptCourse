let arr = [1,2,3,4,5];
let arr2 = [];

function iterArray(arr) {
  if(arr.length == 0) {
    throw new Error("The array need at least one element");
  } else {
    for(let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
}

iterArray(arr);
iterArray(arr2)
