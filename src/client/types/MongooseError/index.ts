interface IMongooseError {
  kind: string;
  message: string;
  name: string;
  path: string;
}

export default IMongooseError;
