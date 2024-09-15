import React from 'react';

interface SearchBarProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
const SearchBar = ({ handleSearch }: SearchBarProps) => {
  return (
    <div className="search_bar">
      <form>
        <input type="text" placeholder="Write here to search!" onKeyDown={handleSearch} />
      </form>
    </div>
  );
};

export default SearchBar;
