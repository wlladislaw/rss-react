import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';
import serchInputReducer from './searchInpytSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
    searchInput: serchInputReducer,
  },
});
