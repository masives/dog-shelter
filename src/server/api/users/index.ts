import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
interface IUser {
  username: string;
  password: string;
}

interface IUserModel extends mongoose.Document, IUser {}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  password: {
    required: true,
    type: String
  },
  username: {
    required: true,
    type: String,
    unique: true
  }
}).plugin(uniqueValidator);

const UserModel: mongoose.Model<IUserModel> = mongoose.model('users', UserSchema);

export const addUser = (user: IUser) => UserModel.create(user);

export const findUserByUsername = (username: string) => UserModel.findOne({ username });

export default UserModel;
