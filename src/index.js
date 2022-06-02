const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

/*
    GET - BUSCAR INFORMAÇÕES DENTRO DO SERVIDOR
    POST - INSERIR UMA INFORMAÇÃO NO SERVIDOR
    PUT - ALTERAR UMA INFORMAÇÃO NO SERVIDOR
    PATCH - ALTERAR UMA INFORMAÇÃO ESPECÍFICA NO SERVIDOR
    DELETE - DELETAR UMA INFORMAÇÃO NO SERVIDOR
*/

/*
    TIPOS DE PARÂMETROS

    ROUTE PARAMS => IDENTIFICAR UM RECURSO, EDITAR OU DELETAR ESSE RECURSO
    QUERY PARAMS => PAGINAÇÃO / FILTRO
    BODY PARAMS => OBJETOS DE INSERÇÃO / ALTERAÇÃO
*/


const cursos = [
    "Curso 1",
    "Curso 2",
    "Curso 3"
]

app.get('/courses', (req, res) => {
    return res.json(cursos);
})

app.post('/courses', (req, res) => {
    const response  = req.body.curso; 
    cursos.push(response);
})

app.put('/courses/:id', (req, res) => {
    const {id} = req.params;
    const response  = req.body.curso; 
    
})

app.patch('/courses/:id', (req, res) => {
    const {id} = req.params;
    const response  = req.body.curso; 
    
})

app.delete('/courses/:id', (req, res) => {
    const {id} = req.params;
    const response  = req.body.curso; 
    
})


app.listen(PORT, () => {
    console.log('Server is up!');
});