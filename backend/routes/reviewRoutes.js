import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createReview,
  getReviewsByRecipeId,
} from "../controllers/reviewController.js";

const router = express.Router();

// Post /api/reviews
router.post("/", authMiddleware, createReview);

// Get /api/reviews/:recipeId
router.get("/:recipeId", getReviewsByRecipeId);

export default router;
