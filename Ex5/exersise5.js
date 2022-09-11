function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}

console.log(leapyear(2016))
alert(leapyear(2016))