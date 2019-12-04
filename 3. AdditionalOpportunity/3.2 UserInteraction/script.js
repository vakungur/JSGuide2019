document.querySelector('#alert').addEventListener('click', function(){
    console.log('fe')
    alert('вы успешно кликнули по кнопке')
})


document.querySelector('#confirm').addEventListener('click', function(){
    console.log('fe')
    var desir = confirm('А ТЫ УВЕРЕН???')
    if(desir) {
        alert('вы успешно кликнули по кнопке')
    }
})

document.querySelector('#prompt').addEventListener('click', function(){
   var age = prompt('Введите свой возраст')
   if (age < 18) {
       alert('У нас тут сопляк!!!')
       document.body.style.backgroundColor = 'red'
   } else {
       alert('Свои, проходи!')
       document.body.style.backgroundColor = 'black'
   }
})

console.log('Console.log')
console.warn('Console.warn')
console.info('console.info')
console.error('Console.error')

throw new Error ('error')