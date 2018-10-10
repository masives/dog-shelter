import * as express from 'express';
import * as _ from 'lodash';
import * as mongoose from 'mongoose';
import Animal from '../../../types/Animal';
import animalModel from '../schema/animal';

const apiRouter = express.Router();

//mocked animals schema
const animals: Array<Animal> = [
  {
    id: '0',
    name: 'Masala',
    race: 'dog',
    age: 3,
    preferedPlace: 'block',
    description: 'Fajny psiakeon z długą sznupą, ale troszke głupek',
    status: 'taken',
    photos: ['masala_1.jpg', 'masala_2.jpg']
  },
  {
    id: '1',
    name: 'Bigos',
    race: 'dog',
    age: 5,
    preferedPlace: 'house',
    description: 'Straszny gupkoneusz, niedorzecznie wręcz',
    status: 'up for grabs',
    photos: ['bigos_1.jpg', 'bigos.jpg']
  }
];
let id = 2;

apiRouter
  .route('/animals')
  .get((req, res) => {
    animalModel
      .find({})
      .then((document: mongoose.MongooseDocument) => {
        res.send(document);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  })
  .post((req, res) => {
    const newAnimal = req.body;

    // ensure unique name
    animalModel
      .create(newAnimal)
      .then(document => {
        res.status(200).send(document);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  });

apiRouter
  .route('/animals/:id')
  .get((req, res) => {
    const { id } = req.params;
    animalModel
      .findById(id)
      .then(animal => {
        res.status(200).send(animal);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  })
  .put((req, res) => {
    const update = req.body;
    const { id } = req.params;
    animalModel
      .findByIdAndUpdate(id, update, { new: true })
      .then(animal => {
        res.status(200).send(animal);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  })
  .delete((req, res) => {
    const animalIndex = _.findIndex(animals, { id: req.params.id });
    if (!animalIndex) {
      res.status(404).send('Animal not found');
      return;
    }

    const removedAnimal = animals.splice(animalIndex);

    res.send(removedAnimal);
  });

export default apiRouter;
