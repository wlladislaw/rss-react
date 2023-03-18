import { render, screen } from '@testing-library/react';
import Card from './Card';
import Cards from './Cards';
import { data } from './data';

describe('Card', () => {
  it('render Card component ', () => {
    render(<Card card={data[0]} />);
    expect(screen.queryByText(/Show more /i)).toBeNull();
    //expect(screen.getAllByAltText(/image/i)).toHaveClass();
  });
});
