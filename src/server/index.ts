import * as express from 'express';
const bodyParser = require('body-parser');
import apiRouter from './api/index';
import * as mongoose from 'mongoose';
const DATABASE_NAME = 'friends_shelter';

const port: number = 3000;

// connect to db
mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`);

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
