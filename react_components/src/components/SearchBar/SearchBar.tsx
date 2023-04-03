import React, { useEffect, useRef, useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState<string>(localStorage.getItem('inputValue') || '');
  const inputRef = useRef('');

  useEffect(() => {
    inputRef.current = input;
  }, [input]);
  useEffect(() => {
    return () => localStorage.setItem('inputValue', inputRef.current);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
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
        <button onClick={(e) => e.preventDefault()}>Search</button>
      </form>
      <div>{input}</div>
    </div>
  );
};

export default SearchBar;
