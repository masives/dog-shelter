import * as express from 'express';
import * as mongoose from 'mongoose';
import path from 'path';
import apiRouter from './api';
import authRouter from './api/auth';
import { graphQLRouter } from './graphql';
import useAuthentication from './middleware/authentication';
import useFileUpload from './middleware/fileUpload';
import useParsers from './middleware/parsers';

const {
  APPLICATION_PORT,
  MONGO_SERVICE_HOST,
  MONGODB_PORT_NUMBER,
  MONGO_DATABASE_NAME,
} = process.env;

// connect to db
mongoose.connect(
  `mongodb://${MONGO_SERVICE_HOST}:${MONGODB_PORT_NUMBER}/${MONGO_DATABASE_NAME}`,
  { useNewUrlParser: true }
);

const app: express.Express = express();

useParsers(app);
useFileUpload(app);

// public has to be accessible before authentication to send js file even if unauthorized
app.use(express.static('public'));

// authentication
app.get('/login', (req, res) => {
  const indexPath = path.resolve('public/index.html');
  res.sendFile(indexPath);
});
app.use('/api/auth', authRouter);
useAuthentication(app);

// website serving
app.use(express.static('uploads'));

// router
app.use('/api', apiRouter);
graphQLRouter.applyMiddleware({ app });

// send index if anything else (due to browser router)
app.get('*', (req, res) => {
  const indexPath = path.resolve('public/index.html');
  res.sendFile(indexPath);
});

app.listen(APPLICATION_PORT, '0.0.0.0');
console.log(`app started on port ${APPLICATION_PORT}`);
