import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../components/App/App';

describe('App', () => {
  it('Renders 404, if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/lalala']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Oops, 404')).toBeInTheDocument();
  });

  it('Renders About us', () => {
    render(
      <MemoryRouter initialEntries={['/about_us']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/About Us !/i)).toBeInTheDocument();
  });
});
