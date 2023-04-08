// import { render, screen } from '@testing-library/react';
// import Card from '../components/Card/Card';

// describe('Card', () => {
//   it('render Card component ', () => {
//     render(<Card card={data[0]} />);
//     expect(screen.queryByText(/Show more /i)).toBeNull();
//   });
//   it('render image ', () => {
//     render(<Card card={data[0]} />);
//     expect(screen.getByAltText(/image/i)).toBeInTheDocument();
//   });
// });

import { render, screen, fireEvent } from '@testing-library/react';
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
  // test('displays modal when image is clicked', () => {
  //   render(<Card card={mockCard} />);
  //   const imageElement = screen.getByAltText('card');
  //   fireEvent.click(imageElement);
  //   const modalOwnerElement = screen.getByText('Mock owner');
  //   expect(modalOwnerElement).toBeInTheDocument();
  // });

  // test('closes modal when close button is clicked', () => {
  //   render(<Card card={mockCard} />);
  //   const imageElement = screen.getByAltText('card');
  //   fireEvent.click(imageElement);
  //   const closeButtonElement = screen.getByAltText('close');
  //   fireEvent.click(closeButtonElement);
  //   const modalTitleElement = screen.queryByText('Mock title');
  //   expect(modalTitleElement).not.toBeInTheDocument();
  // });
});
