import multer from 'multer';

export default multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/jpeg|png|gif$i/)) {
      return cb(new Error('File is not supported'), false);
    }
    return cb(null, true);
  }
});

// const storage = multer.diskStorage({});
// const sides = 4,
//   width = 1024,
//   height = 1024;
// const upload = multer({
//   storage,
//   limits: {
//     fileSize: sides * width * height
//   }
// });

// export default upload;