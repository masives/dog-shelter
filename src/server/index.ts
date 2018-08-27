import * as express from 'express';
import * as _ from 'lodash';
const bodyParser = require('body-parser');

const port: number = 3000;
const app = express();

app.use(express.static('public'));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

interface Animal {
  id: string;
  name: string;
  race: string;
  age: number;
  preferedPlace: string;
  description: string;
  status: string;
  photos: Array<string>;
}

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

app.get('/animals', (req, res) => {
  res.send(animals);
});

app.get('/animals/:id', (req, res) => {
  const currentId: String = req.params.id;
  const searchedAnimal = _.find(animals, (animal: Animal) => {
    return animal.id === currentId;
  });
  searchedAnimal ? res.send(searchedAnimal) : res.status(404).send('animal not found');
});

app.post('/animals', (req,res) => {
  const newId = id;
  id += 1;
  const newAnimal = req.body;
  newAnimal.id = newId;
  animals.push(newAnimal);
  res.send(newAnimal);
})

app.put('/animals/:id', (req, res) => {
  const update = req.body;
  if(update.id) {
    delete update.id
  }

  const animalIndex = _.findIndex(animals,{id: req.params.id})
  const updatedAnimal = _.assign(animals[animalIndex], update)
  res.send(updatedAnimal);
})

app.listen(port);
console.log(`app started on port ${port}`);
