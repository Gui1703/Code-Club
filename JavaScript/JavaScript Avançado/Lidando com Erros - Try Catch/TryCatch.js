// O Try Catch é utilizado para tratar erros que podem acontecer dentro do sistema. Esses erros podem ser por codificação do programador, entrada incorreta de dados pelo usuário ou até mesmo imprevistos.

// Quando qualquer desses erros acontece, o Try Catch lança uma exceção, que é um objeto de erro, e com isso é possível realizar o tratamento ideal para a situação.

// O tratamento de um erro pode ser uma mensagem na tela para o usuário ou salvar esse erro em um arquivo de logs para que seja analisado. Existem outras formas, mas essas são as principais.

// O bloco de instrução Try Catch basicamente pode ser dividido em três partes.

// A primeira parte é o Try, dentro dele ficará o código a ser executado que pode ser passível de algum erro, como por exemplo, chamadas a API, dados vindos de usuário e entre outros. O Try basicamente diz, “tente executar o que está aqui”.

// A segunda parte é o Catch, caso o código que está sendo executado dentro do Try tenha algum erro, a execução é interrompida e ai começa a execução do bloco Catch, ele pode receber um parâmetro que normalmente é nomeado como error. Esse é um objeto de erro e com ele é possível realizar o tratamento para saber o que ocasionou o erro.
 
// A terceira parte é opcional, é o bloco Finally, que independente de dar erro ou não, este será executado.

// Exemplo

try {
    // código que inclui comandos/invocações de métodos
    // que podem gerar uma situação de exceção.
  } catch (error) {
    // bloco de tratamento do erro
  } finally {
    // bloco de código que sempre será executado após
    // o bloco try, independentemente de sua conclusão
    // ter ocorrido normalmente ou ter sido interrompida
  }