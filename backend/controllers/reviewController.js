import Review from "../models/Review.js";
import Recipe from "../models/Recipe.js";

export const createReview = async (req, res) => {
  const { recipeId, rating, comment } = req.body;

  try {
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }

    const newReview = new Review({
      user: req.user.id,
      recipe: recipeId,
      rating,
      comment,
    });

    const review = await newReview.save();
    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const getReviewsByRecipeId = async (req, res) => {
  const { recipeId } = req.params;

  try {
    const reviews = await Review.find({ recipe: recipeId }).populate("user", [
      "username",
      "profilePicture",
    ]);
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
