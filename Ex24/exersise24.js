function check(x, y) {
    if (x != y) {
        x1 = Math.abs(x - 100)
        y1 = Math.abs(y - 100)
        if (x1 < y1) {
            return x
        } else if (x1 > y1) {
            return y
        }
    }
    else {
        return false
    }
}

console.log(check(109, 108))
console.log(check(90, 89))
console.log(check(-90, -89))
console.log(check(90, 90))
