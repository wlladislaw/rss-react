import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  // const [input, setInput] = useState<string>('');

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') handleSearch(input);
  // };

  return (
    <div className="search_bar">
      <form>
        <input type="text" placeholder="Write here to search!" onKeyDown={handleSearch} />
      </form>
    </div>
  );
};

export default SearchBar;
