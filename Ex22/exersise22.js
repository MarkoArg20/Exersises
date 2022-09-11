function check(str) {
    if (str.substring(4, 10) == 'Script') {
        return (str.replace('Script', ''))
    } else {
        return str
    }
}

console.log(check('JavaScript'))
console.log(check('HomeworkScript'))