/* [X] Escreva um programa onde, você chame uma função, e ela diga a hora exata! */

function time() {
    var hoy = new Date();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    console.log(hora);
}

time()

console.log(new Date().toLocaleTimeString('pt-BR'));