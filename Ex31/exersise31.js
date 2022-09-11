function checkIfEight(a, b) {
    let comp = a + b
    let min = a - b
    if (a == 8 || b == 8) {
        return 'True'
    } else if (comp == 8) {
        return 'The sum is 8'
    } else if (min == 8) {
        return 'THe difference is 8'
    } else {
        return 'No 8 in the process or in the parameters!'
    }
}

console.log(checkIfEight(8, 4))
console.log(checkIfEight(4, 4))
console.log(checkIfEight(32, 24))
console.log(checkIfEight(44, 44))