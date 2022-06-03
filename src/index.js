const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const PORT = 3000;

const customers = []

/*
    cpf - string
    name - string
    id - uuid
    statement []
*/


app.post("/account", (request, response) => {
    const {cpf, name } = request.body;
    
    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

    if(customerAlreadyExists){
        return response.status(400).json({error: "Customer already exists!"})
    }
    
    customers.push({
        cpf,
        name, 
        id: uuidv4(),
        statement: []
    })

    return response.status(201).send();
})

app.post("/statement", (req, res) => {
    
});

app.get("/statement/:cpf", (req, res) => {
    const cpf = req.params;
    
    const customer = customers.find(cpf => customer.cpf === cpf);

    return response.json(customer.statement);
});

app.listen(PORT, () => {
    console.log('Server is up!');
});



