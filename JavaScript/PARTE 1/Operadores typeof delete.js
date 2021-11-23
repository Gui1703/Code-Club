/* OPERADORES typeof delete */ 

//      TYPEOF
/*
const myNumber = 20
const myString = "Olá, sou uma string"
const myObject = {
    name: "Object",
    age: 21
}

console.log(typeof myNumber)*/

//      DELETE
const myObject = {
    name: "Object",
    age: 21, 
    heigth: 1.7
}
delete myObject.age

console.log(myObject)