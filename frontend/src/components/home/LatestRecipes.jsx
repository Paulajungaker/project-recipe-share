import RecipeCard from "../RecipeCard";

const sampleLatestRecipes = [
  {
    image: "/images/Carbonara.svg",
    title: "Pasta Carbonara",
    description:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    username: "ItalianChef",
    rating: 4.9,
    tags: ["Meat", "Dairy"],
  },
  {
    image: "/images/Sushi.svg",
    title: "Sushi Rolls",
    description:
      "Homemade sushi rolls with fresh fish, avocado, cucumber, and sushi rice.",
    username: "SushiMaster",
    rating: 4.7,
    tags: ["Fish"],
  },
  {
    image: "/images/ChocolateCake.svg",
    title: "Chocolate Cake",
    description:
      "Decadent chocolate cake with layers of rich chocolate ganache.",
    username: "ChocoLover",
    rating: 4.8,
    tags: ["Dessert", "Dairy", "Gluten"],
  },
  {
    image: "/images/StirFry.svg",
    title: "Vegetable Stir Fry",
    description:
      "Healthy vegetable stir fry with tofu and a savory soy sauce marinade.",
    username: "HealthyEats",
    rating: 4.5,
    tags: ["Vegetarian", "Healthy"],
  },
];

const LatestRecipes = () => {
  return (
    <div className="homeRecipesContainer">
      <h2>Latest Recipes</h2>
      <div className="homeRecipeList">
        {sampleLatestRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            title={recipe.title}
            description={recipe.description}
            username={recipe.username}
            rating={recipe.rating}
            tags={recipe.tags}
            onClick={() => alert(`You clicked on ${recipe.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestRecipes;
