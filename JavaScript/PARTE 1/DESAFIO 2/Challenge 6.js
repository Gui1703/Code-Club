/* [x] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente. */

const note = 11

switch (note) {
    case 0:
        console.log('Nota muito péssima')
    break;

    case 1:
        console.log('Estude mais')
    break;

    case 2:
        console.log('Da pra melhorar')
    break;

    case 3:
        console.log('Da o melhor de sim na proxima !')
    break;

    case 4:
        console.log('Vê se melhora mais')
    break;

    case 5:
        console.log('Razoável')
    break;

    case 6:
        console.log('Mais alta que a média')
    break;

    case 7:
        console.log('Ta melhorando')
    break;

    case 8:
        console.log('Se fizer Code Club melhorando')
    break;

    case 9:
        console.log('Está ótimo, mas não o suficiente')
    break;

    case 10:
        console.log('PERFEITO')
    break;

    default:
        console.log('Por favor, selecione um numero de 0 a 10 !!!')
    break;
}