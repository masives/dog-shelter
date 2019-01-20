import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { IAnimal } from '../../../../types/Animal';

export interface IAnimalModel extends mongoose.Document, IAnimal {}
type IAnimalDocumentQuery = mongoose.DocumentQuery<
  IAnimalModel,
  IAnimalModel,
  {}
>;

const AnimalSchema: mongoose.Schema = new mongoose.Schema({
  age: {
    required: true,
    type: Number,
  },
  description: {
    required: true,
    type: String,
  },
  livingPlace: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
    unique: true,
  },
  photo: {
    required: true,
    type: String,
  },
  race: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
}).plugin(uniqueValidator);

const AnimalModel: mongoose.Model<IAnimalModel> = mongoose.model(
  'animals',
  AnimalSchema
);

export const findAnimals = (
  // todo - type search criteria
  searchCriteria
): mongoose.DocumentQuery<IAnimal[], IAnimalModel, {}> =>
  AnimalModel.find(searchCriteria);

export const findAnimalById = (id: string): IAnimalDocumentQuery =>
  AnimalModel.findById(id);

export const createAnimal = (newAnimal: IAnimal): Promise<IAnimal> =>
  AnimalModel.create(newAnimal);

export const updateAnimal = (
  id: string,
  update: IAnimal
): IAnimalDocumentQuery =>
  AnimalModel.findByIdAndUpdate(id, update, { new: true });

export const removeAnimal = (id: string): IAnimalDocumentQuery =>
  AnimalModel.findByIdAndRemove(id);

export default AnimalModel;
