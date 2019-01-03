import * as express from 'express';
import animalsRouter from './animals';
import photoRouter from './photo';
import usersRouter from './users/api';
const apiRouter = express.Router();

apiRouter.use('/animals', animalsRouter);
apiRouter.use('/photo', photoRouter);
apiRouter.use('/users', usersRouter);

export default apiRouter;
