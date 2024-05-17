let sumUniqueNumbers = function(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        // Verifica se o número atual é único
        if ((i === 0 || sortedArr[i] !== sortedArr[i - 1]) && (i === sortedArr.length - 1 || sortedArr[i] !== sortedArr[i + 1])) {
            sum += sortedArr[i];
        }
    }
    return sum;
}

// Exemplo de uso
let array = [3, 3, 4, 4, 5, 6, 6, 8];
console.log(sumUniqueNumbers(array)); // Deve imprimir 13 (soma dos números únicos: 5 e 8)

console.log(sumUniqueNumbers([2,2,3,3,6]))
