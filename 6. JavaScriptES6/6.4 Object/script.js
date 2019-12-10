const createCar = (name, model) => {
    return {name, model}
}

const ford = createCar ('Ford', 'Focus')

console.log(ford)

const yearField = 'year'

const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    [yearField]: 2018,

    logFields() {
        const {name, year, model} = this
        console.log(name, year, model)
    }
}

console.log(bmw)
bmw.logFields()

// const year = bmw.year
const {year} = bmw
console.log(year)