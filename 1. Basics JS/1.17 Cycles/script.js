var numbers = [1, 2, 3, 4, 5]
console.log(numbers[0])
numbers.push('Not a number')

for (var i = 0; i < 5; i++) {
    console.log(i)
}

for (var i = 0; i < 6; i++) {
    console.log(numbers[i])
}

var cars = [
    'audi', 
    'bmw', 
    'kia', 
    'ford', 
    'dodje'
]

for (i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i <numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i <numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue
    }
    console.log(numbers[i])
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i <numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        break
    }
    console.log(numbers[i])
}