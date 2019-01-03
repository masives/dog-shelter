import * as mongoose from 'mongoose';
import { addUser } from '../src/server/api/users/repository';
const {
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  MONGO_SERVICE_HOST,
  MONGODB_PORT_NUMBER,
  MONGO_DATABASE_NAME,
} = process.env;

(async () => {
  const mongooseConnection = await mongoose.connect(
    `mongodb://${MONGO_SERVICE_HOST}:${MONGODB_PORT_NUMBER}/${MONGO_DATABASE_NAME}`,
    { useNewUrlParser: true }
  );
  mongooseConnection.connection.db.dropCollection('users');
  const seededUsers = await addUser({
    password: ADMIN_PASSWORD,
    username: ADMIN_USERNAME,
  });
  console.log('seeded users: ', seededUsers);
  console.log('script working');
})();
