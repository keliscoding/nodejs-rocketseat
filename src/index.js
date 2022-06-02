const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    return res.json({message: 'haro wordu'})
})

app.listen(PORT, () => {
    console.log('Server is up!');
});