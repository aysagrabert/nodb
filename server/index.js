let ctry = require('./controller');

const express = require("express");

const port = 4400;

const app = express();

app.use(express.json());

//endpoints //get delete only prams queries
//get
app.get('/api/countries', ctry.allCountries);

//post
app.post('/api/countries', ctry.addCountries);

//delete
app.delete('/api/countries/:index', ctry.deleteCountries);

//put
app.put('/api/countries', ctry.editCountries);

app.listen(port, () => {
    console.log('6660 is Haunted!')
});

