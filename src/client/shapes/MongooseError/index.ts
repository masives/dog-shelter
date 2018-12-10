import { shape, string } from 'prop-types';

const mongooseErrorShape = shape({
  kind: string,
  message: string,
  name: string,
  path: string,
});

export default mongooseErrorShape;
