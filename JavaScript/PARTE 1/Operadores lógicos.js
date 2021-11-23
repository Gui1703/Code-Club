/* 
    OPERADORES LÓGICOS
        && -> E // FILHO OBEDIENTE
            true && true = true
            true && false = false
            false && false = false

        || -> Ou // FILHO ESPERTO
            true || true = true
            true || false = true 
            false || false = false

        ! -> Negação // FILHO DO CONTRA / REBELDE
            !true = false
            !false = true
*/
// Operador &&
console.log(true && true)
console.log(true && false)
console.log(false && false)

// Operador ||
console.log(true || true)
console.log(true || false)
console.log(false || false)

// Operador !
console.log(!true)
console.log(!false)


console.log(!(!(true && true && true  /* VERDADEIRO - TRUE */)  && !(false && true || true /* FALSO - FALSE */)))
//           (!(       TRUE                                  )  && !(      FALSE   ||  VERDADEIRO = VERDADEIRO))
//         (! (    FALSO = FICA FALSO POR CAUSA DA NEGAÇÃO      &&      FALSO = FICA FALSO POR CAUSA DA NEGAÇÃO )
//                                         ( ! FALSO && FALSO = FALSO )
//                                         ( VERDADEIRO = FICA VERDADEIRO POR CAUSA DA NEGAÇÃO )