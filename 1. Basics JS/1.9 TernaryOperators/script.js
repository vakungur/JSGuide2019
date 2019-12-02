4 ? console.log('Значение true') : console.log('Значение false')

((true || false) || !false) ? console.log('Значение true') : console.log('Значение false')

var personAge = 20
// var message

// if (personAge < 18) {
//     message = 'Человек еще не совершеннолетний'
// } else {
//     message = 'Человек совершеннолетний'
// }

var message = personAge < 18
    ? 'Человек еще не совершеннолетний'
    : 'Человек совершеннолетний'

console.log(message)

// ? - 'if'
// : - 'else'