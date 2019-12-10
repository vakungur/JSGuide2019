const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    saveFrom(title, text, description)
})

// Spread
// function saveFrom(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     }

//     console.log('Ford data:', formData)
// }

function saveFrom(...arqs) {

    const [title, text, description] = arqs

    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    }

    console.log('Ford data:', formData)
}