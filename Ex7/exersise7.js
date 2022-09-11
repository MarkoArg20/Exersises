let number = Math.floor(Math.random() * 10) + 1
console.log(number)

let user = prompt("PLease enter a random number")

if (number == user) {
    alert('Good work!')
} else {
    alert('Not matched!')
}