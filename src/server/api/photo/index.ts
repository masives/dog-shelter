import * as express from 'express';
import * as fs from 'fs';
const uuidv1 = require('uuid/v1');
const path = require('path');

const STORED_FILES_DIRECTORY = '/uploads/';

const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

const apiRouter = express.Router();

apiRouter.route('/').post((req: any, res, next) => {
  if (Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  if (Object.keys(req.files).length > 1) {
    return res.status(400).send('Only one file allowed.');
  }

  const photoFile = req.files.file;

  const currentPath = process.cwd();
  const filepath = `photos/${uuidv1()}.jpg`;
  const targetDestination = currentPath + STORED_FILES_DIRECTORY + filepath;
  ensureDirectoryExistence(targetDestination);
  photoFile.mv(targetDestination, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(`/${filepath}`);
  });
});

export default apiRouter;
