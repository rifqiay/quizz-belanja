const multer = require("multer");
const path = require("path");
const maxSize = 1 * 2024 * 2024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Unsupported Media Type, only jpg, jpeg or png"));
    }
  },
  limits: (req, file, cb) => {
    if (fileSize <= maxSize) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("File to large, max 2 MB"));
    }
  },
});

module.exports = upload;
