import Header from "../components/home/Header";
import FeaturedRecipes from "../components/home/FeaturedRecipes";
import LatestRecipes from "../components/home/LatestRecipes";

const Home = () => {
  return (
    <div>
      <Header />
      <FeaturedRecipes />
      <LatestRecipes />
    </div>
  );
};

export default Home;
