const express = require('express');
const port = 3000

const app = express()
app.use(express.json())

/*
    - Query params => meusite.com/users?nome=rodolfo&age=28   FILTROS
    - Route params => /users/2    BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECIFICO
    - Request Body => { "name": "Guilherme", "age": 21 }
*/

// QUERY PARAMS
app.get('/users', (request, response) => {
    const name = request.query.name
    const age = request.query.age

    // const {name, age} = request.query   // - Destructuring assignment

    return response.json({name,age})
})

// ROUTE PARAMS
app.get('/users/:id', (request, response) => {
    const { id } = request.params
    console.log(id)
    
    return response.json({id})
})

// BODY PARAMS
app.get('/users', (request, response) => {
    const { name, age } = request.body
    
    return response.json({name, age})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})