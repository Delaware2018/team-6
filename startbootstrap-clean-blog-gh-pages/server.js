const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/register', async (req, res) => {
cont jsonObj = JSON.parse( req.body )
const file = fs.readFileSync('', )
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
