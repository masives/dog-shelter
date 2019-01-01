import * as express from 'express';
import animalsRouter from './animals';
import photoRouter from './photo';
const apiRouter = express.Router();

apiRouter.use('/animals', animalsRouter);
apiRouter.use('/photo', photoRouter);

export default apiRouter;
