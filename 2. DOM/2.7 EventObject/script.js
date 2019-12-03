var divs = document.querySelectorAll('div')
var link = document.querySelector('a')

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation()
        console.log(this.getAttribute('id'))
    })
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event) {
    event.preventDefault()
    var box = divs[0]
    if (box.style.display === 'none') {
        box.style.display = 'flex'
    } else {
        box.style.display = 'none'
    }
// Равнозначная запись 
    // box.style.display = box.style.display === 'none'
    // ? 'flex'
    // : 'none'
}


