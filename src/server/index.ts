import * as express from 'express';
import * as mongoose from 'mongoose';
import apiRouter from './api';
import useFileUpload from './middleware/fileUpload';
import useParsers from './middleware/parsers';

const { APPLICATION_PORT, MONGO_SERVICE_HOST, MONGODB_PORT_NUMBER, MONGO_DATABASE_NAME } = process.env;

// connect to db
mongoose.connect(
  `mongodb://${MONGO_SERVICE_HOST}:${MONGODB_PORT_NUMBER}/${MONGO_DATABASE_NAME}`,
  { useNewUrlParser: true }
);

const app: express.Express = express();

// website serving
app.use(express.static('public'));
app.use(express.static('uploads'));

// parsers
useParsers(app);
useFileUpload(app);

// router
app.use('/api', apiRouter);

app.listen(APPLICATION_PORT, '0.0.0.0');
console.log(`app started on port ${APPLICATION_PORT}`);
