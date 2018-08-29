import * as express from 'express';
import * as _ from 'lodash';
import Animal from '../../../types/Animal';

const apiRouter = express.Router();

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

apiRouter.get('/animals', (req, res) => {
  res.send(animals);
});

apiRouter.get('/animals/:id', (req, res) => {
  const currentId: String = req.params.id;
  const searchedAnimal = _.find(animals, { id: req.params.id });
  searchedAnimal ? res.send(searchedAnimal) : res.status(404).send('animal not found');
});

apiRouter.post('/animals', (req, res) => {
  const newId = id;
  id += 1;
  const newAnimal = req.body;
  newAnimal.id = newId;
  animals.push(newAnimal);
  res.send(newAnimal);
});

apiRouter.put('/animals/:id', (req, res) => {
  const update = req.body;
  if (update.id) {
    delete update.id;
  }

  const animalIndex = _.findIndex(animals, { id: req.params.id });
  const updatedAnimal = _.assign(animals[animalIndex], update);
  res.send(updatedAnimal);
});

export default apiRouter;
