import { Request, Response, Router } from 'express';
import { addUser } from '../repository';
const apiRouter = Router();

apiRouter.post('/', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.sendStatus(400);
  }

  const newUser = await addUser({ username, password }).catch((err) =>
    res.status(400).send(err)
  );

  res.status(200).send(newUser);
});

export default apiRouter;
