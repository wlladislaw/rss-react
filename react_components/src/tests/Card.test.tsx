import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { data } from '../data';

describe('Card', () => {
  it('render Card component ', () => {
    render(<Card card={data[0]} />);
    expect(screen.queryByText(/Show more /i)).toBeNull();
  });
  it('render image ', () => {
    render(<Card card={data[0]} />);
    expect(screen.getByAltText(/image/i)).toBeInTheDocument();
  });
});
