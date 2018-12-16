import * as express from 'express';
const bodyParser = require('body-parser');
import * as mongoose from 'mongoose';
const fileUpload = require('express-fileupload');
import apiRouter from './api';

const {APPLICATION_PORT, MONGO_SERVICE_HOST, MONGODB_PORT_NUMBER, MONGO_DATABASE_NAME} = process.env;

// connect to db
mongoose.connect(
  `mongodb://${MONGO_SERVICE_HOST}:${MONGODB_PORT_NUMBER}/${MONGO_DATABASE_NAME}`,
  { useNewUrlParser: true }
);

const app = express();

// website serving
app.use(express.static('public'));
app.use(express.static('uploads'));

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

app.listen(APPLICATION_PORT, '0.0.0.0');
console.log(`app started on port ${APPLICATION_PORT}`);
