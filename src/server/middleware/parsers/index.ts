import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

const useParsers = (app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use(cookieParser());
};
export default useParsers;
