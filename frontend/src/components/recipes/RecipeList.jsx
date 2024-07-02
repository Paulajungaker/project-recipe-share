import RecipeCard from "../RecipeCard";
import "./styling/RecipeList.css";

const sampleRecipes = [
  {
    image: "/images/ChickenBurger.png",
    title: "Chicken Burger",
    description: "A crispy and flavourful chicken burger.",
    username: "chefMario",
    rating: 4.5,
    tags: ["Chicken", "Dairy", "Gluten"],
  },
  {
    image: "/images/GreenCurry.png",
    title: "Vegan Green Curry with Rice",
    description:
      "A flavorful and spicy vegan curry made with a blend of aromatic spices.",
    username: "spiceMaster",
    rating: 4.8,
    tags: ["Vegetarian"],
  },
  {
    image: "/images/VeganTacos.png",
    title: "Vegan Tacos",
    description:
      "Delicious and healthy vegan tacos filled with beans, avocado, and fresh vegetables.",
    username: "plantLover",
    rating: 4.7,
    tags: ["Vegetarian", "Healthy"],
  },
  {
    image: "/images/RaspberryCake.png",
    title: "Raspbery Cake",
    description: "A delicious summery cake with vanilla cream and raspberries.",
    username: "plantLover",
    rating: 4.7,
    tags: ["Dessert", "Dairy"],
  },
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

const RecipeList = () => {
  return (
    <div className="recipeContainer">
      <div className="recipeList">
        {sampleRecipes.map((recipe, index) => (
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

export default RecipeList;
