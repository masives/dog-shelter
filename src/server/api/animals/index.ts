import * as express from 'express';
import * as _ from 'lodash';
import {
  createAnimal,
  findAnimalById,
  findAnimals,
  removeAnimal,
  updateAnimal,
} from '../../resources/animalRepository';

const apiRouter = express.Router();

const isNumeric = (obj) => {
  const realStringObj = obj && obj.toString();
  return (
    !Array.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0
  );
};

const hasQueryArguments = (query) => {
  return Object.keys(query).length;
};

const buildSearchCriteria = (query) => {
  const searchCriteria = {};
  // this can be change into reduce
  Object.keys(query).forEach((key) => {
    if (isNumeric(query[key])) {
      searchCriteria[key] = query[key];
      return;
    }
    searchCriteria[key] = new RegExp(query[key], 'i');
  });
  return searchCriteria;
};

apiRouter
  .route('/')
  .get((req, res) => {
    const { query } = req;
    const searchCriteria = hasQueryArguments(query)
      ? buildSearchCriteria(query)
      : undefined;
    findAnimals(searchCriteria)
      .then((animals) => {
        res.send(animals);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  })
  .post((req, res) => {
    const newAnimal = req.body;
    createAnimal(newAnimal)
      .then((document) => {
        res.status(200).send(document);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

apiRouter
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    findAnimalById(id)
      .then((animal) => {
        res.status(200).send(animal);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  })
  .put((req, res) => {
    const update = req.body;
    const { id } = req.params;
    updateAnimal(update, id)
      .then((animal) => {
        res.status(200).send(animal);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    removeAnimal(id)
      .then(() => {
        res.status(200).send(`Succesfully deleted animal for id: ${id}`);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

export default apiRouter;
