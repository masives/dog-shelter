import * as express from 'express';
import * as _ from 'lodash';
import * as mongoose from 'mongoose';
import animalModel from './schema';

const apiRouter = express.Router();

const isNumeric = (obj) => {
  var realStringObj = obj && obj.toString();
  return !Array.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
};

const hasQueryArguments = (query) => {
  return Object.keys(query).length;
};

const buildSearchCriteria = (query) => {
  const searchCriteria = {};
  Object.keys(query).forEach((key) => {
    console.log('search criterion', query[key]);
    console.log('type', typeof query[key]);
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
      ?
      buildSearchCriteria(query)
      : undefined;
    animalModel
      .find(searchCriteria)
      .then((document: mongoose.MongooseDocument) => {
        res.send(document);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  })
  .post((req, res) => {
    const newAnimal = req.body;
    animalModel
      .create(newAnimal)
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
    animalModel
      .findById(id)
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
    animalModel
      .findByIdAndUpdate(id, update, { new: true })
      .then((animal) => {
        res.status(200).send(animal);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    animalModel
      .findByIdAndRemove(id)
      .then(() => {
        res.status(200).send(`Succesfully deleted animal for id: ${id}`);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

export default apiRouter;
