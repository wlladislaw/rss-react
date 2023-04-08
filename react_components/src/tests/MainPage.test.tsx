import { render } from '@testing-library/react';
import MainPage from '../components/About/AboutUs';

describe('MainPage API', () => {
  it('fetch data', async () => {
    const { findByText } = render(<MainPage />);

    expect(await findByText(/image/i)).toBeInTheDocument();
  });
});
