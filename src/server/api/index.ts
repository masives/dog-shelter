import * as express from 'express';
import * as _ from 'lodash';
import * as mongoose from 'mongoose';
import animalModel from '../schema/animal';

const apiRouter = express.Router();

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
    const { id } = req.params;
    animalModel
      .findByIdAndRemove(id)
      .then(() => {
        res.status(200).send(`Succesfully deleted animal for id: ${id}`);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  });

export default apiRouter;
