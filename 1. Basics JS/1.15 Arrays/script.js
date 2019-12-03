var cars = [
    'Ford',
    'Mazda',
    'Kia',
    'BMW'
]

var any = [
    42,
    'apple',
    {a:1}
]

console.log(cars)
console.log(cars[1])
console.log(any)

console.log(cars.length)

cars.push('Audi')
console.log(cars)

cars.pop()
console.log(cars)

var ford = cars.shift()
console.log(cars, ford)

cars.unshift(ford)
console.log(cars)

console.log(cars.indexOf('Kia'))

var index = cars.indexOf('Kia')
var kia = cars[index]
console.log(kia)
