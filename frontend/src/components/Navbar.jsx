// import { Link } from "react-router-dom";
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
            <li className="navListItem">Login</li>
            <li className="navListItem">Register</li>
            <li className="navListItem">Home</li>
          </ul>
          <ul className="rightNavList">
            <li className="navListItem">Recipes</li>
            <li className="navListItem">Submit Recipe</li>
            <li className="navListItem">Profile</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
