/* For each */

const students = [
    { name: "Guilherme", age: 21 },
    { name: "Maria", age: 43 },
    { name: "João", age: 25 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Julio", age: 26 },
];

let allStudentsAge = 0

students.forEach((student, index) => {
    console.log(`O aluno ${student.name}, tem ${student.age} anos e está na posição ${index} do Array`);
})


/*
// Primeiro exemplo
let allStudentsAge = 0

students.forEach((student, index) => {
    allStudentsAge += student.age
})

const averageAge = allStudentsAge / students.length

console.log(`A média dos alunos é de ${averageAge.toFixed(0)}`)
*/


// student - nome definido (posição 1)
// index - mostra quantos items tem (posição 2)
// array - mostra o array completo (posição 3)
/*
students.forEach( (student, index, array) => {
    console.log(student, index, array);
})
*/