import * as mongoose from 'mongoose';

const AnimalSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const AnimalModel: mongoose.Model<any> = mongoose.model('animals', AnimalSchema);

export default AnimalModel;
