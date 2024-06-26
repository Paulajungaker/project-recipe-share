import "./styling/SearchRecipe.css";

const SearchRecipe = () => {
  return (
    <div className="searchContainer">
      <form className="searchForm">
        <label className="searchTitle">
          Search for Recipe:
          <input type="text" className="searchInput" />
        </label>
        <button className="searchButton">Search</button>
      </form>
      <img
        className="sectionLineSmall"
        src="/images/SectionLine-S.svg"
        alt="Line dividing sections"
      />
    </div>
  );
};

export default SearchRecipe;
