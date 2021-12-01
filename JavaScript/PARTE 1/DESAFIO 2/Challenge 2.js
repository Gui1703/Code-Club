/* [x] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO */

const person = {
    name: 'Guilherme',
    age: 21,
    country: "Brasil"
}

if(person.country == 'Brasil'){
    console.log('A pessoa é brasileira')
} else {
    console.log('A pessoa é estrangeira')
}