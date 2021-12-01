/* [x] Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada. */

const personOne = {
    name: "Guilherme",
    age: 21,
    sex: "male",
    profession: "Desenvolvedor",
    nationality: "Brasil"
}, personTwo = {
    name: "Alessandra",
    age: 16,
    sex: "female",
    profession: "Vendedora",
    nationality: "Brasil"
}, personThree = {
    name: "Regiane",
    age: 39,
    sex: "female",
    profession: "Professora",
    nationality: "Brasil"
}, personFour = {
    name: "João",
    age: 21,
    sex: "male",
    profession: "Comerciante",
    nationality: "Argentino"
}, personFive = {
    name: "Maria",
    age: 10,
    sex: "female",
    profession: "Estudante",
    nationality: "Brasil"
}

if (personOne.age >= 18 && personOne.nationality === "Brasil") {
    for (let property in personOne) {
        console.log(`${property}: ${personOne[property]}`)
    }
    console.log('PESSOA APROVADA')
    
}

if (personTwo.age >= 18 && personTwo.nationality === "Brasil") {
    for (let property in personTwo) {
        console.log(`${property}: ${personTwo[property]}`)
    }
    console.log('PESSOA APROVADA')
}

if (personThree.age >= 18 && personThree.nationality === "Brasil") {
    for (let property in personThree) {
        console.log(`${property}: ${personThree[property]}`)
    }
    console.log('PESSOA APROVADA')
}

if (personFour.age >= 18 && personFour.nationality === "Brasil") {
    for (let property in personFour) {
        console.log(`${property}: ${personFour[property]}`)
    }
    console.log('PESSOA APROVADA')
}

if (personFive.age >= 18 && personFive.nationality === "Brasil") {
    for (let property in personFive) {
        console.log(`${property}: ${personFive[property]}`)
    }
    console.log('PESSOA APROVADA')
}