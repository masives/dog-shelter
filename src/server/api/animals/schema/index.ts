import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

const AnimalSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  livingPlace: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}).plugin(uniqueValidator);

const AnimalModel: mongoose.Model<any> = mongoose.model('animals', AnimalSchema);

export default AnimalModel;
