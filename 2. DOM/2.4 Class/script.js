var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')
box2.classList.add('blue')
box1.classList.remove('red')
var hasClass = box2.classList.contains('blue')
console.log(hasClass)

if (hasClass) {
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}
