/* Return function */

// SEM O return a função é VOID = VAZIO

              //PARÂMETROS
             //|               |
function sum(number1, number2) {
    const result = number1 + number2
    return result
}
const firstNumber = 10
const seccondNumber = 50

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma dos dois é ${sum(firstNumber, seccondNumber)}`)

// |ARGUMENTOS 
sum(firstNumber, seccondNumber) // INVOCA A FUNÇÃO, CHAMA A FUNÇÃO - invoke ro call
