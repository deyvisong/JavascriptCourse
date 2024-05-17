function isPalindrome(b) {
    let palavraInvertida = b.split('').reverse().join('')
    if(b == palavraInvertida) {
        return true
    } else {
        return false
    }
}

let radar = isPalindrome("radar")
console.log(radar)
