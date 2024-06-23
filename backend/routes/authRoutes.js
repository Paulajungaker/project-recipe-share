import express from "express";
import { check } from "express-validator";
import * as authController from "../controllers/authController.js";
import { authMiddleware, upload } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    check("username", "Username is required.").not().isEmpty(),
    check("email", "Please include a valid email.").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({ min: 6 }),
  ],
  authController.registerUser
);

router.post(
  "/login",
  [
    check("email", "Please include a valid email.").isEmail(),
    check("password", "Password is required").exists(),
  ],
  authController.loginUser
);

router.put("/profile", authMiddleware, upload, authController.updateProfile);

router.get("/", authMiddleware, authController.getUser);

export default router;
