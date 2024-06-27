import { useEffect } from "react";
import "./styling/SearchFilter.css";

const SearchFilter = () => {
  useEffect(() => {
    const updateImageSource = () => {
      const images = document.querySelectorAll(".filterImage");
      images.forEach((img) => {
        if (window.innerWidth >= 1024) {
          img.src = img.getAttribute("data-src-l");
        } else if (window.innerWidth >= 745) {
          img.src = img.getAttribute("data-src-m");
        } else {
          img.src = img.getAttribute("data-src-s");
        }
      });
    };

    window.addEventListener("resize", updateImageSource);
    window.addEventListener("load", updateImageSource);

    updateImageSource();

    return () => {
      window.removeEventListener("resize", updateImageSource);
      window.removeEventListener("load", updateImageSource);
    };
  }, []);

  return (
    <div className="filterContainer">
      <h2 className="filterTitle">Filter by:</h2>
      <div className="filterWrapper">
        <div className="filter">
          <p className="filterText">Meat</p>
          <img
            className="filterImage"
            src="/filters/MeatFilter-S.svg"
            data-src-s="/filters/MeatFilter-S.svg"
            data-src-m="/filters/MeatFilter-M.svg"
            data-src-l="/filters/MeatFilter-L.svg"
            alt="Meat filter"
          />
        </div>
        <div className="filter">
          <p className="filterText">Fish</p>
          <img
            className="filterImage"
            src="/filters/FishFilter-S.svg"
            data-src-s="/filters/FishFilter-S.svg"
            data-src-m="/filters/FishFilter-M.svg"
            data-src-l="/filters/FishFilter-L.svg"
            alt="Fish filter"
          />
        </div>
        <div className="filter">
          <p className="filterText">Vegetarian</p>
          <img
            className="filterImage"
            src="/filters/VegoFilter-S.svg"
            data-src-s="/filters/VegoFilter-S.svg"
            data-src-m="/filters/VegoFilter-M.svg"
            data-src-l="/filters/VegoFilter-L.svg"
            alt="Vegetarian filter"
          />
        </div>
        <div className="filter">
          <p className="filterText">Chicken</p>
          <img
            className="filterImage"
            src="/filters/ChickenFilter-S.svg"
            data-src-s="/filters/ChickenFilter-S.svg"
            data-src-m="/filters/ChickenFilter-M.svg"
            data-src-l="/filters/ChickenFilter-L.svg"
            alt="Chicken filter"
          />
        </div>
        <div className="filter">
          <p className="filterText">Healthy</p>
          <img
            className="filterImage"
            src="/filters/HealthyFilter-S.svg"
            data-src-s="/filters/HealthyFilter-S.svg"
            data-src-m="/filters/HealthyFilter-M.svg"
            data-src-l="/filters/HealthyFilter-L.svg"
            alt="Healthy filter"
          />
        </div>
        <div className="filter">
          <p className="filterText">Dessert</p>
          <img
            className="filterImage"
            src="/filters/DessertFilter-S.svg"
            data-src-s="/filters/DessertFilter-S.svg"
            data-src-m="/filters/DessertFilter-M.svg"
            data-src-l="/filters/DessertFilter-L.svg"
            alt="Dessert filter"
          />
        </div>
        <div className="filter">
          <p className="filterText">Gluten-Free</p>
          <img
            className="filterImage"
            src="/filters/GlutenFreeFilter-S.svg"
            data-src-s="/filters/GlutenFreeFilter-S.svg"
            data-src-m="/filters/GlutenFreeFilter-M.svg"
            data-src-l="/filters/GlutenFreeFilter-L.svg"
            alt="Gluten-free filter"
          />
        </div>
        <div className="filter">
          <p className="filterText">Dairy-Free</p>
          <img
            className="filterImage"
            src="/filters/DairyFreeFilter-S.svg"
            data-src-s="/filters/DairyFreeFilter-S.svg"
            data-src-m="/filters/DairyFreeFilter-M.svg"
            data-src-l="/filters/DairyFreeFilter-L.svg"
            alt="Dairy-free filter"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
