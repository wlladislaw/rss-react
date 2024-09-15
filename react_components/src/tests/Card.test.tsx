import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import { CardPic } from '../types';

describe('Card component', () => {
  const mockCard: CardPic = {
    id: '1',
    title: 'Mock title',
    image: 'https://mockurl.com/mockimage.jpg',
    owner: 'Mock owner',
    server: 'Mock server',
  };

  test('renders card with title and image', () => {
    render(<Card card={mockCard} />);
    const title = screen.getByText('Mock title');

    expect(title).toBeInTheDocument();
  });

  it('render image ', () => {
    render(<Card card={mockCard} />);
    expect(screen.getByAltText(/image/i)).toBeInTheDocument();
  });
});
