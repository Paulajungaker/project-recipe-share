import RecipeCard from "../RecipeCard";

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
];

const FeaturedRecipes = () => {
  return (
    <div className="featuredRecipes">
      <h2 className="featuredTitle">Featured Recipes</h2>
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

export default FeaturedRecipes;
