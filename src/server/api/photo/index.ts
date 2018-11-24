import * as express from 'express';
const uuidv1 = require('uuid/v1');
const path = require('path');

const apiRouter = express.Router();

apiRouter.route('/').post((req: any, res, next) => {
  if (Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  if (Object.keys(req.files).length > 1) {
    return res.status(400).send('Only one file allowed.');
  }

  console.log('files', req.files);
  const photoFile = req.files.file;
  // add hash with date
  const currentPath = process.cwd();
  const filepath = `uploads/photos/${uuidv1()}.jpg`;
  const targetDestination = path.join(currentPath, filepath);
  photoFile.mv(targetDestination, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(filepath);
  });
});

export default apiRouter;
