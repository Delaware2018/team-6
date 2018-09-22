const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express()
const port = 3001
var csv = require("fast-csv");

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', async (req, res) => {

  var stream = fs.createReadStream("Sidekick.csv")

  const jsonObj = req.body

  console.log(jsonObj.first);

  res.send(jsonObj);
});

app.post('/apply', async (req, res) => {

    const jsonObj = req.body;

    console.log(jsonObj.first);

    res.send(jsonObj);
    //const file = fs.readFileSync('', )
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
