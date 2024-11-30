import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataApi } from '../types';

export const photosAPI = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flickr.com/services/rest/',
  }),
  endpoints: (build) => ({
    fetchAllPhotos: build.query<DataApi, string>({
      query: (input) => ({
        url: `?method=flickr.photos.search&api_key=f8e8c8e39de193f01618299b61e622ea&text=${input}&format=json&nojsoncallback=1`,
      }),
    }),
  }),
});
