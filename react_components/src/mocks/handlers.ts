import { rest } from 'msw';
const input = 'people';
const mockResponse = {
  photos: {
    photo: [
      {
        id: '1',
        title: 'test title 1',
        owner: 'test owner 1',
        server: 'test server 1',
        secret: 'test secret 1',
        farm: 1,
      },
      {
        id: '2',
        title: 'test title 2',
        owner: 'test owner 2',
        server: 'test server 2',
        secret: 'test secret 2',
        farm: 2,
      },
    ],
  },
};
const url = `https://api.flickr.com/services/rest/`;
const searchParams = new URLSearchParams(
  `?method=flickr.photos.search&api_key=f8e8c8e39de193f01618299b61e622ea&text=${input}&format=json&nojsoncallback=1`
);
const method = searchParams.get('method');
const text = searchParams.get('text');

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    if (method === 'flickr.photos.search' && text === 'people') {
      return res(ctx.status(200), ctx.json(mockResponse));
    }
  }),
];
