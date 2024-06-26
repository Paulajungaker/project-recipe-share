import PropTypes from "prop-types";
import "./styling/RecipeCard.css";

const RecipeCard = ({
  image,
  title,
  description,
  username,
  rating,
  tags = [],
  onClick = () => {},
}) => {
  return (
    <div className="recipeCard" onClick={onClick}>
      <img className="recipeImage" src={image} alt={title} />
      <div className="recipeContent">
        <h5 className="recipeTitle">{title}</h5>
        <hr className="recipeLine"></hr>
        <h5 className="recipeDescription">{description}</h5>
        <h5 className="recipeUsername">{username}</h5>
        <span className="rating">{rating}</span>
        <hr className="recipeLine"></hr>
        <div className="recipeTagsWrapper">
          {tags.map((tag, index) => (
            <span key={index} className="recipeTag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

RecipeCard.defaultProps = {
  onClick: () => {},
};

export default RecipeCard;
