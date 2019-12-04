var str = '1, 2, 3, 4, 5, 6, 7, 8'

var array = str.split(',')

// console.log(array.join(';'))
// console.log(array.reverse())

array.splice(1, 0, '11')

var newArray = array.concat([1, 2])

// console.log(newArray)

var objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 20}
]

var foundPerson = objArr.find(function(person){
    return person.age === 20
})

console.log(foundPerson)

var oddArray = [1,2,3,4,5,6,7,88,8,].filter(function(i) {
    return i % 2 !==0
})


var numArray = array.map(function(i){
    var clo = i * 2
    return parseInt(clo)
})
console.log(numArray)