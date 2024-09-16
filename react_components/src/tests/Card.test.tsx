import { render, fireEvent, screen } from '@testing-library/react';
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

const mockCard: CardPic = {
  id: '1',
  owner: 'John Doe',
  server: 'US',
  title: 'Example Card',
  image: 'example-image.jpg',
};

describe('Modal component', () => {
  test('displays modal when image is clicked', () => {
    const { getByAltText, getByRole, getByText } = render(<Card card={mockCard} />);
    fireEvent.click(getByAltText('image'));
    expect(getByRole('heading', { name: 'Example Card' })).toBeInTheDocument();
    expect(getByText('Id: 1')).toBeInTheDocument();
    expect(getByText('Owner: John Doe')).toBeInTheDocument();
    expect(getByText('Server: US')).toBeInTheDocument();
  });
});
