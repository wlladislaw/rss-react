// import axios from 'axios';
// import { AppDispatch } from '../store';
// import { photosSlice } from './DataPhotosSlice';
// import { Photo } from '../../types';

// const input = 'people';
// export const fetchPhotos = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(photosSlice.actions.photosFetching());

//     const res = await axios.get<Photo[]>(
//       `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f8e8c8e39de193f01618299b61e622ea&text=${input}&format=json&nojsoncallback=1`
//     );
//     dispatch(photosSlice.actions.photosFetchingSuccess(res.data));
//   } catch (e) {
//     dispatch(photosSlice.actions.photosFetchingError(e.message));
//   }
// };
