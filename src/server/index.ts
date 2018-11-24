import * as express from 'express';
const bodyParser = require('body-parser');
import * as mongoose from 'mongoose';
const fileUpload = require('express-fileupload');
import apiRouter from './api';

const DATABASE_NAME = 'friends_shelter';

const port: number = 3000;

// connect to db
mongoose.connect(
  `mongodb://localhost/${DATABASE_NAME}`,
  { useNewUrlParser: true }
);

const app = express();

// website serving
app.use(express.static('public'));

// parsers
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// file upload handling
app.use(
  fileUpload({
    safeFileNames: true
  })
);

// router
app.use('/api', apiRouter);

app.listen(port);
console.log(`app started on port ${port}`);
