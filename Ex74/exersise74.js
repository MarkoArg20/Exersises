function compare_first_last(arr) {
    const max_val = arr[0] > arr[2] ? arr[0] : arr[2]
    arr[0] = max_val
    arr[1] = max_val
    arr[2] = max_val

    return arr
}

document.write('Open the console')

console.log(compare_first_last([1, 2, 3]))
console.log(compare_first_last([1, 12, 1111]))
console.log(compare_first_last([10, 21312, 30,]))