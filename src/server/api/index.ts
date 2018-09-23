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
    res.send(animals);
  })
  .post((req, res) => {
    const newAnimal = req.body;
    console.log(req.body);
    animalModel
      .create(req.body)
      .then(function(err, todo) {
        res.status(200).send(newAnimal);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  });

apiRouter
  .route('/animals/:id')
  .get((req, res) => {
    const searchedAnimal = _.find(animals, { id: req.params.id });
    searchedAnimal ? res.send(searchedAnimal) : res.status(404).send('animal not found');
  })
  .put((req, res) => {
    const update = req.body;
    if (update.id) {
      delete update.id;
    }

    const animalIndex = _.findIndex(animals, { id: req.params.id });
    const updatedAnimal = _.assign(animals[animalIndex], update);
    res.send(updatedAnimal);
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
