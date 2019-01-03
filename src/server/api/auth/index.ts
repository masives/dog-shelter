import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { DAY_IN_SECONDS } from '../../../../constants';
import { comparePassword } from '../../utilities/crypto';
import { findUserByUsername } from '../users/repository';

const { JWT_SECRET } = process.env;
const authRouter = express.Router();

authRouter.route('/login').post(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (user) {
    const isPasswordMatching = comparePassword(password, user.password);
    if (!isPasswordMatching) {
      res.sendStatus(401);
    }
    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: DAY_IN_SECONDS,
    });
    res
      .status(200)
      .cookie('jwt', token)
      .send(token);
  }
  return res.sendStatus(401);
});

export default authRouter;
