import * as express from 'express';
import animalsRouter from './animals';
import authRoute from './auth/api';
import photoRouter from './photo';
const apiRouter = express.Router();

apiRouter.use('/animals', animalsRouter);
apiRouter.use('/photo', photoRouter);
apiRouter.use('/auth', authRoute);

export default apiRouter;
