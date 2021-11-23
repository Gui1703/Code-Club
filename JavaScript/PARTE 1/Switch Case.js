/* 
        CONTROLE DE FLUXO - CONDICIONAIS - Switch Case
*/

const temperature = 40

switch (temperature) {
    case 30:
        console.log('A pessoa está com a temperatura MUITO abaixa do normal')
    break;

    case 33:
        console.log('A pessoa está com a temperatura abaixo do normal')
    break;

    case 36:
        console.log('A pessoa está com a temperatura normal')
    break; 

    default:
        console.log('Temperatura não encontrada')
    break;
}


const bool = false

switch (bool) {
    case true:
        console.log("It's true")
    break;

    case false:
        console.log("It's false")
    break;
}