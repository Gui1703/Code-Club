/* [X] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou */

function numbers(number1){
    const numberResult = 10
    for(let i = 1; i <= number1; i++){
        console.log(i)
    }
    console.log('Terminou minha função')
}

numbers(10)