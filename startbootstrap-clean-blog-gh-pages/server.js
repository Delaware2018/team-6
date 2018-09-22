const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express()
const port = 3001


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', async (req, res) => {

  const jsonObj = req.body;

  var line = jsonObj.name + "," + jsonObj.email + "," + jsonObj.phone + "," + jsonObj.password + "\n";

  fs.appendFile('db/Mentor.csv', line, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  res.send(jsonObj);
});

app.post('/apply', async (req, res) => {

    const jsonObj = req.body;

    console.log(jsonObj.first);

    res.send(jsonObj);


    var line = jsonObj.name + "," + jsonObj.email + "," + jsonObj.phone + "," + jsonObj.city + "," +
        jsonObj.occupation + "," + jsonObj.interests + "," + jsonObj.alma_mater + "," + jsonObj.involvement + "," +
        jsonObj.additional + "\n";

    fs.appendFile('db/Mentors_app.csv', line, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
