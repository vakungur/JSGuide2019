var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'http://ya.ru')
a.textContent = 'Yandex'
a.setAttribute('title', 'Go to Yandex')
console.log(a.attributes)