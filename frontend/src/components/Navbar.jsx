import { Link } from "react-router-dom";
import "./styling/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <img
          className="chefIconS"
          src="/icons/ChefIcon-S.png"
          alt="Tiny chef"
        />
        <img
          className="chefIconL"
          src="/icons/ChefIcon-L.png"
          alt="Tiny chef"
        />
        <div className="logoWrapper">
          <img className="logoIcon" src="/icons/logoIcon.png" alt="Logotype" />
        </div>
        <div className="navLinksWrapper">
          <hr className="logoLine"></hr>
          <hr className="logoLine"></hr>
          <ul className="leftNavList">
            <li className="navListItem">
              <Link to="/login" className="navLink">
                Login
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/register" className="navLink">
                Register
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
          </ul>
          <ul className="rightNavList">
            <li className="navListItem">
              <Link to="/recipes" className="navLink">
                Recipes
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/submit-recipe" className="navLink">
                Submit Recipe
              </Link>
            </li>
            <li className="navListItem">
              <Link to="/profile" className="navLink">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
