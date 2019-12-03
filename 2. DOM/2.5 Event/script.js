var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')
var text = 'Старт!'

button.addEventListener('click', function(){
    h1.textContent = input.value
});

h1.addEventListener('mouseenter', function(){
    this.style.color = 'red'
    this.style.backgroundColor = 'blue'
    this.style.borderRadius = '5px'
    this.style.fontSize = '70px'
    h1.textContent = 'Че задумался, нажимай!'
    console.log(h1)
})

h1.addEventListener('mouseleave', function(){
    this.style.color = 'black'
    h1.textContent = text
})
