let color = 'red'

color = {color: 'yellow'}

color = 'blue'

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 2000)
}

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 2000)
}

const HEX = '#FFAABB'