/* [X] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!  */

function year() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    console.log(currentYear);
}

year()

console.log(new Date().getFullYear());