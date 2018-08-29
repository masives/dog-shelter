import * as express from 'express';
import * as _ from 'lodash';
import apiRouter from './api/index';
import Animal from '../../types/Animal';
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

app.use('/api', apiRouter);

app.listen(port);
console.log(`app started on port ${port}`);
