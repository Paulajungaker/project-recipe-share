import { Link } from "react-router-dom";
import "./styling/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="headerImgS"
        src="/images/HeaderImage-S.png"
        alt="Image of table"
      />
      <img
        className="headerImgM"
        src="/images/HeaderImage-M.png"
        alt="Image of table"
      />
      <img
        className="headerImgL"
        src="/images/HeaderImage-L.png"
        alt="Image of table"
      />
      <div className="headerContent">
        <h1 className="headerTitle">Discover and Share Amazing Recipes</h1>
        <h4 className="headerText">
          Join our community of food enthusiasts and explore thousands of
          recipes from around the world. Share your own culinary creations and
          inspire others.
        </h4>
        <div className="headerButtonWrapper">
          <button className="headerButton">
            <Link to="/recipes">Explore Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
