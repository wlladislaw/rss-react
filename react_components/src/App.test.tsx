import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import NavBar from './NavBar';

describe('App', () => {
  it('Renders 404, if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/lalala']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Oops, 404')).toBeInTheDocument();
  });
});

// describe('NavBar', () => {
//   it('should render page About Us on click', async () => {
//     render(<NavBar />);
//     await userEvent.click(screen.getByRole('About Us'));
//     expect(screen.getAllByText(/About Us !/i)).toBeInTheDocument();
//   });
// });
