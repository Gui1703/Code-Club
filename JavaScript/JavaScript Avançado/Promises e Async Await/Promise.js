// Promise é um objeto que representa um valor futuro. Podemos fazer uma analogia á uma compra online, ou seja, após você efetuar a compra você terá um objeto em algum momento no futuro caso tudo ocorra bem, mas algo pode dar errado no meio do caminho e você será informado.

// Quando você instancia a Promise, new Promise(), ela está retornando uma "promessa" de que algo será concluído em breve. Para saber quando essa "promessa" será concluída, você deve registrar um callback, ou seja, você "diz" para a Promise qual função deve ser executada quando ela terminar o processamento. A mesma regra vale para erros.

// Então uma Promise tem 3 possíveis estados:

// Pending - estado inicial, pendente de execução
// fulfilled - concluída com sucesso
// rejected - ocorreu algum erro

// Então temos o seguinte:

const valorFuturo = new Promise(/* ... */);

valorFuturo
  .then((valor) => {
    /* ... */
  }) // <-- callback de sucesso
  .catch((erro) => {
    /* ... */
  }); // <-- callback de erro

//   Veja que o .then e o .catch são os métodos que a Promise fornece para registrarmos um callback de sucesso ou erro respectivamente.

// Exemplo setTimeout
// Tomemos um outro exemplo com o setTimeout:

function consultarDados() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("resolvida"), 2000 /* 2 segundos */);
  });
}

consultarDados().then((resultado) => {
  console.log(resultado);
});

console.log("olá");
// [Log] olá
// [Log] resolvida
