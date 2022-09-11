function last_and_first_nchar(str, n) {
    let first = str.substring(0, n)
    let second = str.substring(str.length - n)
    return first + second
}

document.write('Check the console!')

console.log(last_and_first_nchar('Javascript', 2))
console.log(last_and_first_nchar('Javascript', 3))