import submittedFormsReducer from './reducers/SubmittedFormsSlice';
import searchInputReducer from './reducers/SearchInputSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { photosAPI } from '../services/PhotosService';

const rootReducer = combineReducers({
  searchInputReducer,
  submittedFormsReducer,
  [photosAPI.reducerPath]: photosAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photosAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
