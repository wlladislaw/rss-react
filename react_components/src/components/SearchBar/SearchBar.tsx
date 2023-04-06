const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search_bar">
      <form>
        <input type="text" placeholder="Write here to search!" onKeyDown={handleSearch} />
      </form>
    </div>
  );
};

export default SearchBar;
