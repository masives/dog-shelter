import * as express from 'express';
// const express = require('express');

const bodyParser = require('body-parser');

const port: number = 3000;
const app = express();

app.use(express.static('public'));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('siemka');
});

app.listen(port);
console.log(`app started on port ${port}`);
