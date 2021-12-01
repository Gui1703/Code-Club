/* [x] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5. */

const number = 7

/*
if (number % 2 === 1) {
    console.log('ESSE NÚMERO É ÍMPAR')
} else {
    console.log('ESSE NÚMERO É PAR')
}

if (number % number === 0 && number % 2 === 1) {
    console.log('É UM NUMERO PRIMO E ÍMPAR')
}
if (number % 2 === 0 && number / 5) {
    console.log('É PAR E DIVISÍVEL POR 5')
}
*/

if (number % 2 === 0) {

    if (number % 5 === 0) console.log("O número é par e divisível por 5")
    else console.log("O número é par e NÃO é divisível por 5")
} else {
    for(let i = 2; i < number; i++) 
        if( number % i === 0){
            console.log("Ele é ímpar, mas não é primo")
            break
        } else {
            if(i === number - 1) console.log("Ele é um número primo")
        }
}