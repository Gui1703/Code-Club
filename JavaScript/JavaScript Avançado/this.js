/*
    THIS

    THIS em inglês significa => este, esta, isto...

    No Javascript, o this faz referencia

    Node => module.exports
    Web => window

    Escopo: 
        => Global 0> Quando começamos a escrever nossa aplicação
            No contexto global, o this faz referencia ao objeto global,
            que pe o objeto window no navegador de internet ou só objeto global no Node.js

        => Local -> Por exemplo, dentro de uma função
*/

console.log(this === module.exports) // Escopo Global faz referencia ao module.exports

// console.log(this === window)  // Para Web

const name = "Guilherme" // Escopo Global

function myNmae(){
    const myName = "Guilherme" // Escopo Local
}

const person = {
    name: "Guilherme",
    age: 21,
    talk: function(){
        console.log(this.name)  // This esta referenciando um escopo local
    }
}

function myFuction(){
    console.log(this) // Mesmo dentro de una função o this ainda e global
    this.console.log("Agora sou o global")
}

myFuction()

person.talk()