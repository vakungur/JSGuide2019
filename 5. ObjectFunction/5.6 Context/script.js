var person = {
    age: 28,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function(ms) {
        var self = this

        setTimeout(function() {
            console.log('Name:',this.name)
            console.log('Job:',this.job)
            console.log('age:',this.age)
        }.bind(this), ms)
    }
}

person.displayInfo(5000)