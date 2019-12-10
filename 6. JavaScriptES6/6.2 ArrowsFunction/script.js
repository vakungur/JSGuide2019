// function getAge(year) {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(getAge(1992))

// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(calculateAge(1992))

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }

// console.log(getAge(1992))

// const getAge = year => {
//     return new Date().getFullYear() - year
// }

// console.log(getAge(1992))

// const getAge = year => new Date().getFullYear() - year
// console.log(getAge(1992))

const person = {
    age: 25,
    firstname: 'Max',
    logNameWithTimeout: function () {
        setTimeout(function() {
            console.log(this.firstname)
        }.bind(this), 1000)
    }
}



