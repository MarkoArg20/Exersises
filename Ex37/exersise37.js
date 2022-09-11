function check(a, b) {
    if (a % 7 == 0 || a % 11 == 0) {
        return 'a is the number'
    } else if (b % 7 == 0 || b % 11 == 0) {
        return 'b is the number'
    }
}

console.log(check(49, 10))
console.log(check(22, 10))
console.log(check(10, 49))
console.log(check(4, 121))
console.log(check(49, 49))