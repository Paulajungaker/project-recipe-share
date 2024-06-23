import multer from "multer";

const profilePictureStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profile");
  },
  filename: function (req, file, cb) {
    console.log("Original File Name:", file.originalname);
    const filename = file.originalname + "-" + Date.now();
    console.log("Generated File Name:", filename);
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
    console.log("Original File Name:", file.originalname);
    const filename = file.originalname + "-" + Date.now();
    console.log("Generated File Name:", filename);
  },
});

const recipeImageUpload = multer({ storage: recipeImageStorage }).single(
  "image"
);

export { profilePictureUpload, recipeImageUpload };
