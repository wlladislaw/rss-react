import React, { useEffect, useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState<string>(() => localStorage.getItem('inputValue') || '');

  useEffect(() => {
    localStorage.setItem('inputValue', input);
  }, [input]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="search_bar">
      <form>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Write here to search!"
        />
        <button>Search</button>
      </form>
      <div>{input}</div>
    </div>
  );
};

export default SearchBar;
