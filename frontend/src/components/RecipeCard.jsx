import PropTypes from "prop-types";
import { CiHeart } from "react-icons/ci";
import "./styling/RecipeCard.css";
import { useEffect, useState } from "react";

const RecipeCard = ({
  image,
  title,
  description,
  username,
  rating,
  tags = [],
  onClick = () => {},
  recipeId,
}) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchLikedStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          `https://project-recipe-share.onrender.com/recipe/${recipeId}/like`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch liked status");
        }
        const data = await response.json();
        setLiked(data.liked);
      } catch (error) {
        console.error("Error fetching liked status:", error);
      }
    };

    fetchLikedStatus();
  }, [recipeId]);

  const toggleLike = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(
        `https://project-recipe-share.onrender.com/recipe/${recipeId}/like`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to toggle like status");
      }
      setLiked((prevLiked) => !prevLiked);
    } catch (error) {
      console.error("Error toggling like status:", error);
    }
  };

  return (
    <div className="recipeCard" onClick={onClick}>
      <img className="recipeImage" src={image} alt={title} />
      <CiHeart
        className="likeIcon"
        style={{ color: liked ? "red" : "inherit", cursor: "pointer" }}
        onClick={toggleLike}
      />
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
  recipeId: PropTypes.string.isRequired,
};

RecipeCard.defaultProps = {
  onClick: () => {},
};

export default RecipeCard;
