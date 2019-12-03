var div2 = document.querySelector('#playground2')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')


div2.innerHTML = '<h2 style="color: red;">From javascript</h2>'


console.log(h1.textContent)
h1.textContent = 'Changed from JS'


console.log(input.value)