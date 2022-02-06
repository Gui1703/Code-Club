// Var x Let x Const

// Variáveis Global
var myVar = "Hello"; // NÃO USAMOS MAIS O VAR - MAS CÓDIGOS ANTIGOS EXISTEM AINDA
let myLet = "Olá";
const myConst = "Hei";

// Variáveis de escopo - só e acessível dentro de onde a declarar
if (true) {
  let myLet = "Olá";
  const myConst = "Hei";
}

// Variáveis de escopo - o var e possível acessa-lo fora do escopo, mesmo sendo declarada dentro do escopo
if (true) {
  var myVar = "Hello"; // NÃO USAMOS MAIS O VAR - MAS CÓDIGOS ANTIGOS EXISTEM AINDA
}

// Com o let consegue alterar seu valor

// Com o const não é possível alterar seu valor

    // Mas se for um objeto e queira mudar seu valor, se fizer assim, o JavaScript deixa

    // const myObject = { name: "Guilherme" }

    // myObject.name = "João"

    // console.log(myObject)

// NAO POSSO ATRIBUI9R UM NOVO VALOR PARA MINHA VARIÁVEL, MAS EU POSSO TROCAR O VALOR DAS PROPRIEDADES INTERNAS DA MINHA VARIÁVEL

