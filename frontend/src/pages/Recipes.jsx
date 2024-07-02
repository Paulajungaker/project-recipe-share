import SearchRecipe from "../components/recipes/SearchRecipe";
import SearchFilter from "../components/recipes/SearchFilter";
import RecipeList from "../components/recipes/RecipeList";

const Recipes = () => {
  return (
    <div>
      <SearchRecipe />
      <SearchFilter />
      <RecipeList />
    </div>
  );
};

export default Recipes;
