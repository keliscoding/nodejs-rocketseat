const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const PORT = 3000;

const customers = []

//Middleware
function verifyIfExistsAccountCPF(request, response, next) {
    const { cpf } = req.headers;
    
    const customer = customers.find((customer)=> customer.cpf === cpf);

    if(!customer){
        return res.status(400).send({error: "customer not found"})
    }

    //todos que chamarem o middleware vão ter acesso ao customer
    request.customer = customer;

    return next();
}

function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
        if(operation.type === 'credit') {
            return acc + operation.amount;
        }else{
            return acc - operation.amount;
        }
    }, 0)

    return balance;
}

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

//app.use(verifyIfExistsAccountCPF);

app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {
    const {customer} = req;
    return res.json(customer.statement);
});

app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
    const {description, amount } = request.body;
    const { customer } = request;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        //deposito => credito, saque => debito
        type: "credit"
    }

    customer.statement.push(statementOperation);
    return response.status(201).send();
});

app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
    const { amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);

    if(balance < amount) {
        return response.status(400).json({error: "Insufficient funds!"});
    }

    const statementOperation = {
        amount,
        created_at: new Date(),
        type: "debit"
    }

    customer.statement.push(statementOperation);
    return response.status(201).send();
});

app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
    const {customer} = request;
    const {date} = request.query;

    const dateFormat = new Date(date + "00:00");

    const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString())

    return response.json(customer.statement);
});


app.listen(PORT, () => {
    console.log('Server is up!');
});



