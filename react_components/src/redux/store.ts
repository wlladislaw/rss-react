import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photosReducer from './reducers/DataPhotosSlice';
import { photosAPI } from '../services/PhotosService';

const rootReducer = combineReducers({
  photosReducer,
  [photosAPI.reducerPath]: photosAPI.reducer,
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
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photosAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
