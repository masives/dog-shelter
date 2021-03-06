import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { hashPassword } from '../../../utilities/crypto';
interface IUser {
  username: string;
  password: string;
}

interface IUserModel extends mongoose.Document, IUser {}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  password: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
    unique: true,
  },
})
  .plugin(uniqueValidator)
  .pre('save', function(next) {
    // @ts-ignore-next-line - we receive password alongside username
    this.password = hashPassword(this.password);
    next();
  });

const UserModel: mongoose.Model<IUserModel> = mongoose.model(
  'users',
  UserSchema
);

export const addUser = (user: IUser) => UserModel.create(user);

export const findUserByUsername = (username: string) =>
  UserModel.findOne({ username });

export default UserModel;
