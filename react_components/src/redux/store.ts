import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';
// import serchInputReducer from './searchInpytSlice';
import photosReducer from './reducers/DataPhotosSlice';

const rootReducer = combineReducers({
  photosReducer,
});

// export default configureStore({
//   reducer: {
//     reducer: rootReducer,
//     counter: counterReducer,
//     // searchInput: serchInputReducer,
//   },
// });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
