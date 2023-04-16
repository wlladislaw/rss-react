import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: {
    inputValue: 'people',
  },
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export default searchInputSlice.reducer;
