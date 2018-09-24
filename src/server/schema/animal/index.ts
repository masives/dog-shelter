import * as mongoose from 'mongoose';

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
});

const AnimalModel: mongoose.Model<any> = mongoose.model('animals', AnimalSchema);

export default AnimalModel;
