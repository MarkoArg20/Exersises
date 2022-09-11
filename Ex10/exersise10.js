function cToF(celsius) {
    let cToFahr = celsius * 9 / 5 + 32
    const message = `${celsius}\xB0C is ${cToFahr} \xB0F`
    console.log(message)
}
console.log(cToF(32))






function fToC(fahrenheit) {
    const fahrToC = (fahrenheit - 32) * 5 / 9
    const message = `${fahrenheit} is ${fahrToC}`
    console.log(message)
}
console.log(fToC(123))

console.log(document.URL)