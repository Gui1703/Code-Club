/* [x] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
    - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
    - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
    Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares. */

/*
const numbers = [60, 20, 8, 10]

let par = false
let impar = false

for (let i = 0; i < 4; i++) {
    numbers[i]

    if(numbers[i] % 2 === 0){
        par = true
    } else if(numbers[i] % 2 === 1){
        impar = true
    } else if (numbers[i] % 2 === 0 && numbers[i] % 2 === 1){
        par = true ,
        impar = true
    }
}

if(par === true && impar === false) {
    console.log("TODOS OS NÚMEROS SÃO PARES")
} else if (par === false && impar === true){
    console.log("TODOS OS NÚMEROS SÃO IMPARES")
} else if (par === true && impar === true){
    console.log("HÁ NÚMEROS PARES E IMPARES")
}
*/

const numberOne = 34
const numberTwo = 34
const numberThree = 22
const numberFour = 4

if(numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0){
    console.log("Todos são pares")
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0){
    console.log("Todos são ímpares")
} else {
    console.log("Tudo misturado, ímpares e pares")
}