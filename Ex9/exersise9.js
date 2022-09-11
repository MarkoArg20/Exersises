let mty = document.getElementById('mty')
mty.addEventListener('click', multiply)
function multiply() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    document.getElementById('result').innerHTML = num1 * num2
}
let dvd = document.getElementById('dvd')
dvd.addEventListener('click', divide)
function divide() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    document.getElementById('result').innerHTML = num1 / num2
}