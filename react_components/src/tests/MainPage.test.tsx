import { render, screen } from '@testing-library/react';
import MainPage from '../components/About/AboutUs';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('MainPage API', () => {
  it('fetch data', async () => {
    render(<MainPage />);
    const imgs = screen.queryAllByText('test title');
    const imgsRes = imgs.map((e) => e.textContent).join('');
    expect(imgsRes).toMatch('');
  });
  it('renders error ', async () => {
    server.use(
      rest.get(`https://api.flickr.com/services/rest/`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<MainPage />);
    const errors = screen.queryAllByText('Error fetching images');
    const errorMessage = errors.map((e) => e.textContent).join('');
    expect(errorMessage).toMatch('');
  });
});
