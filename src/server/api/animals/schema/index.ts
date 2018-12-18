import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { IAnimal } from '../../../../../types/Animal';

interface IAnimalModel extends mongoose.Document, IAnimal {}

const AnimalSchema: mongoose.Schema = new mongoose.Schema({
  age: {
    required: true,
    type: Number
  },
  description: {
    required: true,
    type: String
  },
  livingPlace: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String,
    unique: true
  },
  photo: {
    required: true,
    type: String
  },
  race: {
    required: true,
    type: String
  },
  status: {
    required: true,
    type: String
  }
}).plugin(uniqueValidator);

const AnimalModel: mongoose.Model<IAnimalModel> = mongoose.model('animals', AnimalSchema);

export default AnimalModel;
