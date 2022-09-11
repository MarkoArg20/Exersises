function check(a, b, c) {
    if (a >= 20 && (a < b || a < c)) {
        return 'A is the number!'
    } else if (b >= 20 && (b < a || b < c)) {
        return 'B is the number!'
    } else if (c >= 20 && (c < a || c < b)) {
        return 'C is the number!'
    }
}

console.log(check(20, 21, 1))
console.log(check(2, 21, 22))
console.log(check(2, 21, 20))