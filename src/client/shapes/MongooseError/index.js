import { string, shape } from 'prop-types';

const mongooseErrorShape = shape({
  kind: string,
  name: string,
  path: string,
  message: string
});

export default mongooseErrorShape;
