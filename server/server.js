const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(express.static('client'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(port);
console.log(`app started on port ${port}`)