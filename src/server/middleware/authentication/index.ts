import * as express from 'express';
import * as passport from 'passport';
import * as passportJwt from 'passport-jwt';
import { findUserByUsername } from '../../api/users/repository';

const { ExtractJwt, Strategy } = passportJwt;

const secret = process.env.JWT_SECRET;

const options = {
  jwtFromRequest: ExtractJwt.fromExtractors([(req) => req.cookies.jwt || null]),
  secretOrKey: secret,
};

const jwtStrategy = new Strategy(options, (jwtPayload, done) => {
  const { username } = jwtPayload;
  findUserByUsername(username).then((user) => {
    if (user) {
      return done(null, user, 'udalo się');
    }
    return done('no such user', false);
  });
});

const useAuthentication = (app: express.Express) => {
  app.use(passport.initialize());
  passport.use(jwtStrategy);
  app.use(
    passport.authenticate('jwt', {
      failWithError: true,
      session: false,
    })
  );
};

export default useAuthentication;
