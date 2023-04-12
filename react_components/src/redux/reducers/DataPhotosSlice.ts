import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Photo } from '../../types';

interface DataPhotoState {
  photos: Photo[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: DataPhotoState = {
  photos: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const photosSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    photosFetching(state) {
      state.isLoading = true;
    },
    photosFetchingSuccess(state, action: PayloadAction<Photo[]>) {
      state.isLoading = false;
      state.photos = action.payload;
      state.error = '';
    },
    photosFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default photosSlice.reducer;
