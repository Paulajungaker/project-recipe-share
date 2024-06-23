import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res) => {
  const { title, description, ingredients, instructions } = req.body;
  const image = req.file ? req.file.path : undefined;

  try {
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      image,
      user: req.user.id,
    });

    const recipe = await newRecipe.save();
    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user", ["username"]);
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

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

export const updateRecipe = async (req, res) => {
  const { title, ingredients, instructions } = req.body;
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
      { $set: { title, ingredients, instructions, image } },
      { new: true }
    );

    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(500).send("Server error");
  }
};

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