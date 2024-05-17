function calculateAverage(array) {
    let average = 0;
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i]
    }
    return average = total / array.length
}


console.log(calculateAverage([3,4,5,6,7]))
