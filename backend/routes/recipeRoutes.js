import express from "express";
import { authMiddleware, upload } from "../middleware/authMiddleware.js";
import {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.post("/", authMiddleware, upload, createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", authMiddleware, upload, updateRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

export default router;
