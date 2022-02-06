// CLASSES

/*
const person = {
    name: 'John',
    age: 30,
    talk: function() {
        console.log(`Hello, my name is ${this.name}`)
    }
}
*/


class Person {
    constructor(name, age) {
        console.log(`Hello, my name is ${name}`)

        this.name = name
        this.age = age
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("Guilherme", 21)
const newPerson1 = new Person("Maria", 15)
const newPerson2 = new Person("Joana", 25)

newPerson.talk()
newPerson1.talk()
newPerson2.talk()