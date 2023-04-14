import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchInputSlice } from '../../redux/reducers/searchInputSlice';

// interface SearchBarProps {
//   handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
// }
const SearchBar = () => {
  const { inputValue } = useAppSelector((state) => state.searchInputReducer);
  const dispatch = useAppDispatch();
  const { changeInput } = searchInputSlice.actions;
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(changeInput(event.currentTarget.value));
      // setInput(event.currentTarget.value);
    }
  };
  return (
    <div className="search_bar">
      <form>
        <input
          type="text"
          // value={inputValue}
          placeholder="Write here to search!"
          onKeyDown={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
