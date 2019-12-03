var div = document.getElementById('playground')
var p = document.getElementsByClassName('text')
var h1 = document.getElementsByTagName('h1')


console.log(div)
console.log(p)
console.log(h1)

//  class -> .CLASS_NAME
//  id -> #ID
var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var div2 = document.querySelector('#playground2 ul')
var div3 = document.querySelector('#playground2 div > ul')
console.log(div)
console.log(p)
console.log(h1)
console.log(div2)
console.log(div3)