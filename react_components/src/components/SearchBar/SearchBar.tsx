import React, { useState } from 'react';

const SearchBar = ({handleSearch}) => {
  const [input, setInput] = useState<string>('');



  return (
    <div className="search_bar">
      <form>
        <input
          type="text"
          value={input}
          onChange={handleSearch}
          placeholder="Write here to search!"
        />
        {/* <button onClick={(e) => e.preventDefault()}>Search</button> */}
      </form>
    </div>
  );
};

export default SearchBar;
