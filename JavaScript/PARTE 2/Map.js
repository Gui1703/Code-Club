/*
   MAP 
       - Cria um novo array, a partir do array percorrido (array original)
       - Cria um novo array, com a mesma quantidade de itens do array original
       - Aceita 3 parâmetros 
           - Item do array
           - index
           - array completo
*/

const numbers = [1, 2, 3, 4]
const students = [
    { name: "Guilherme", age: 21 },
    { name: "Maria", age: 43 },
    { name: "João", age: 25 },
    { name: "Bruno", age: 43 },
    { name: "Carla", age: 13 },
    { name: "Ana", age: 20 },
    { name: "Julio", age: 26 },
];

// ARRAY DE STUDENTS
const newStudents = students.map((student) => {
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5,
    }
    return newStudent
})

console.log(newStudents)

/*
// ARRAY DE NUMEROS
const newArray = numbers.map((number) => {
    const newNumber = number + 10 * 2 / 3
    return newNumber
})

console.log(newArray)
*/