function first_last_el(arr) {
    if (arr.length >= 1) {
        let arrFL = [];
        arrFL.push(arr[0], arr[arr.length - 1])
        return arrFL
    } else {
        return 'False'
    }
}
document.write('Open the console!')
console.log(first_last_el([1, 2, 3, 4]))
console.log(first_last_el([1, 2, 3, 4, 5, 6, 7]))