import { render } from '@testing-library/react';

import Cards from './Cards';
describe('Cards', () => {
  //it('render Cards ', () => {
  // render(
  //   <Cards>
  //     <Card card={data[0]} />
  //   </Cards>
  // );
  // screen.debug();
  // expect(screen.queryByText(/See more/i)).toBeInTheDocument();

  // const renderedCards = screen.getAllByTestId('list-item');
  // expect(renderedCards.length).toBe(data.length);
  // screen.debug();
  // const list = screen.getByRole('textbox', {
  //   name: /title/i,
  // });
  // const { getAllByRole } = within(list);
  // const items = getAllByRole('listitem');
  // expect(items.length).toBe(100);
  //});
  // it('renders a list of cards', () => {
  //   const { getByTestId } = render(
  //     <Cards>
  //       {data.map((el) => (
  //         <Card key={el.id} card={el} />
  //       ))}
  //     </Cards>
  //   );
  //   const cardList = getByTestId('list-item');
  //   expect(cardList.children.length).toBe(data.length);
  // });

  it('renders Cards', () => {
    const { getByTestId } = render(<Cards />);
    const component = getByTestId('list');
    expect(component).toHaveClass('cards_container');
  });
});
