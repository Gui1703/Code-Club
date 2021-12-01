/* [x] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem. */

const randomNumber = (Math.ceil(Math.random() *10))
const winningNumber = (Math.ceil(Math.random() *10))

console.log(randomNumber, "randomNumber")
console.log(winningNumber, "winningNumber")

if(randomNumber === winningNumber){
    console.log('Voce ganhou')
} else {
    console.log('Você perdeu')
}