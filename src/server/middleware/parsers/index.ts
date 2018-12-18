import * as bodyParser from 'body-parser';

const useParsers = (app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
};
export default useParsers;
