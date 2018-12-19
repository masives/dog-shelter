import * as fileUpload from 'express-fileupload';

const useFileUpload = (app) => {
  app.use(
    fileUpload({
      safeFileNames: true
    })
  );
};
export default useFileUpload;
