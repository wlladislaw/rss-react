import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import NavBar from './NavBar';

describe('App', () => {
  it('has input with placeholder', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});

// describe('NavBar', () => {
//   it('should render page About Us on click', async () => {
//     render(<NavBar />);
//     await userEvent.click(screen.getByRole('About Us'));
//     expect(screen.getAllByText(/About Us !/i)).toBeInTheDocument();
//   });
// });
