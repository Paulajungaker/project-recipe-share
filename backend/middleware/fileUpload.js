import multer from "multer";

const profilePictureStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profile");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const profilePictureUpload = multer({ storage: profilePictureStorage }).single(
  "profilePicture"
);

const recipeImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/recipes");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  },
});

const recipeImageUpload = multer({ storage: recipeImageStorage }).single(
  "image"
);

export { profilePictureUpload, recipeImageUpload };
