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

app.get("/statement", (req, res) => {
    const { cpf } = req.headers;
    
    const customer = customers.find((customer)=> customer.cpf === cpf);

    if(!customer){
        return res.status(400).send({error: "customer not found"})
    }

    return res.json(customer.statement);
});

app.listen(PORT, () => {
    console.log('Server is up!');
});



