const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb("Debes subir una imagen", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/../public/static/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;