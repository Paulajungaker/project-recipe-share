import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { handleFileUpload } from "../middleware/fileUpload.js";

import {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  likeRecipe,
  unlikeRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/", authMiddleware, handleFileUpload, createRecipe);

router.get("/", getRecipes);
router.get("/:id", getRecipeById);

router.put("/:id", authMiddleware, handleFileUpload, updateRecipe);

router.delete("/:id", authMiddleware, deleteRecipe);

router.put("/recipes/like/:recipeId", authMiddleware, likeRecipe);

router.put("/recipes/unlike/:recipeId", authMiddleware, unlikeRecipe);

export default router;
