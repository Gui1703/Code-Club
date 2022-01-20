/* FILTER */

const list = [
    { name: "Guilherme", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
];

const justVips = list.filter(client => {
    return client.vip
})




const students = [
    { name: "Guilherme", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
];

const newStudentList = students.filter(student => {
    return student.testGrade >= 7
})

console.log(newStudentList)