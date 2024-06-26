import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res) => {
  const { title, description, ingredients, instructions, tags } = req.body;
  const image = req.file ? req.file.path : undefined;

  try {
    const parsedIngredients = Array.isArray(ingredients)
      ? ingredients
      : JSON.parse(ingredients);

    const newRecipe = new Recipe({
      title,
      description,
      ingredients: parsedIngredients,
      instructions,
      image,
      tags,
      user: req.user.id,
    });

    const recipe = await newRecipe.save();

    const responseRecipe = {
      _id: recipe._id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      image: recipe.image,
      tags: recipe.tags,
      user: recipe.user,
      date: recipe.date,
    };

    console.log("Response Recipe:", responseRecipe);

    res.json(responseRecipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user", ["username"]);
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get recipe by Id
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("user", [
      "username",
    ]);
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(500).send("Server error");
  }
};

// Update a recipe
export const updateRecipe = async (req, res) => {
  const { title, ingredients, instructions, tags } = req.body;
  const image = req.file ? req.file.path : undefined;

  try {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }

    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: { title, ingredients, instructions, image, tags } },
      { new: true }
    );

    const responseRecipe = {
      _id: recipe._id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      image: recipe.image,
      tags: recipe.tags,
      user: recipe.user,
      date: recipe.date,
    };

    res.json(responseRecipe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(500).send("Server error");
  }
};

// Delete a recipe
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }

    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await Recipe.deleteOne({ _id: req.params.id });

    res.json({ msg: "Recipe removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(500).send("Server error");
  }
};

// Like a recipe
export const likeRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user.id;

  try {
    let recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }

    if (recipe.likedBy.includes(userId)) {
      return res.status(404).json({ msg: "Recipe already liked" });
    }

    recipe.likedBy.push(userId);

    recipe = await recipe.save();

    res.json({ liked: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Unlike a recipe
export const unlikeRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user.id;

  try {
    let recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }

    if (!recipe.likedBy.includes(userId)) {
      return res.status(400).json({ msg: "Recipe not liked" });
    }

    recipe.likedBy = recipe.likedBy.filter((id) => id.toString() !== userId);

    recipe = await recipe.save();

    res.json({ liked: false });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
