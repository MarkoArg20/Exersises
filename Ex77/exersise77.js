function test(arr) {
    if (arr.length == 2 && arr.includes(1) || arr.includes(3)) {
        return 'T'
    } else {
        return 'F'
    }
}
document.write('Check the console!')

console.log(test([1, 2]))
console.log(test([23, 3]))
console.log(test([3, 2]))
console.log(test([2, 2]))
console.log(test([2, 2, 2]))