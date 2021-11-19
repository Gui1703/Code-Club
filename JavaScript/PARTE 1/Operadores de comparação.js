/* 
    OPERADORES DE COMPARAÇÃO 1 

        ==   -> Igual // Ele compara o valor, mas não compara o tipo do valor // NUNCA USE ESSE DAQUI
        ===  -> TOTALMENTE Igual // Ele verifica o tipo do dado !

        !=   -> Diferente // Ele compara o valor, mas não compara o tipo do valor // NUNCA USE ESSE DAQUI
        !==  -> TOTALMENTE Diferente // Ele verifica o tipo do dado !
*/

/* 
    OPERADORES DE COMPARAÇÃO 2

        >   -> MAIOR
        >=  -> MAIOR ou IGUAL
        <   -> MENOR
        <=  -> MENOR ou IGUAL 
*/


// OPERADORES DE COMPARAÇÃO 1
const firstName = 'João'
const seccondName = 'Maria'
const firstNumber = "6"
const seccondNumber = 6

console.log(firstName == seccondName) // ==   -> Igual // Ele compara o valor, mas não compara o tipo do valor

console.log(firstName === seccondName) // ===  -> TOTALMENTE Igual // Ele verifica o tipo do dado !
console.log(firstNumber === seccondNumber) // ===  -> TOTALMENTE Igual // Ele verifica o tipo do dado !

console.log(firstName != seccondName) // !=   -> Diferente // Ele compara o valor, mas não compara o tipo do valor
console.log(firstName !== seccondName) // !==  -> TOTALMENTE Diferente // Ele verifica o tipo do dado !


// OPERADORES DE COMPARAÇÃO 2
const threeNumber = 5
const fourNumber = 7
const fiveNumber = 10
const sixNumber = 10
console.log(threeNumber > fourNumber) // > MAIOR

console.log(fiveNumber >= sixNumber) // >= MAIOR ou IGUAL

console.log(threeNumber < fourNumber) // < MENOR

console.log(fiveNumber <= sixNumber) // <= MENOR ou IGUAL