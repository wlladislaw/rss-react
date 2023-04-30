import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchInputSlice } from '../../redux/reducers/SearchInputSlice';

const SearchBar = () => {
  const { inputValue } = useAppSelector((state) => state.searchInputReducer);
  const dispatch = useAppDispatch();
  const { changeInput } = searchInputSlice.actions;
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      dispatch(changeInput(event.currentTarget.value));
    }
  };
  return (
    <div className="search_bar">
      <form>
        <input
          type="text"
          defaultValue={inputValue}
          placeholder="people"
          onKeyDown={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
