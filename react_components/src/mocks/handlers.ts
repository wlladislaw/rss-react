import { rest } from 'msw';
const API_KEY = 'f8e8c8e39de193f01618299b61e622ea';
const input = 'people';
const mockResponse = 'image';
const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${input}&format=json&nojsoncallback=1`;
export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse));
  }),
];
