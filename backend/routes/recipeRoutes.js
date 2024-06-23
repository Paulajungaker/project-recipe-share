import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { recipeImageUpload } from "../middleware/fileUpload.js";

import {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/", authMiddleware, recipeImageUpload, createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", authMiddleware, recipeImageUpload, updateRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

export default router;
