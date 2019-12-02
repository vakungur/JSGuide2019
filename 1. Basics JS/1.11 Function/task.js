// Перепишите функию checkAndLogAge таким образом, что бы:
// 1. В консоли можно было определить, что это за объект (человек или машина)
// 2. Мы могли сами определить с каким возрастом сравнивать (не только 10 лет, но и любой другой возраст), причем это должно быть отражено в консоли

var carName = 'Ford'
var carYear = 2012
var personYear = 1990

function calculateAge(year) {
    var currentYear = 2018
    var result = currentYear - year
    return result
}

// function checkAndLogAge(year, name) {
//     if (calculateAge(year) < 10) {
//         console.log('Возраст ' + name + ' меньше 10 лет')
//     } else {
//         console.log('Возраст ' + name + ' больше 10 лет')
//     }
// }
// checkAndLogAge(carYear, 'машины')
// checkAndLogAge(personYear, 'человека')

function checkAndLogAge(year, name, compareTo) {
    if (calculateAge(year) < compareTo) {
        console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
    }
}

checkAndLogAge(carYear, 'машины', 8)
checkAndLogAge(personYear, 'человека', 30)