document.querySelector('#load').addEventListener('click', load)

async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    let response = await fetch(url)
    let data = await response.json()
    let ul = document.querySelector('#list')
    let html = data.map(function(item){
        return `<li>${item.id} ${item.name} (${item.email})</li>`
    })
    ul.insertAdjacentHTML('afterbegin', html.join(' '))
}
