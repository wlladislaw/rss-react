import { render, screen, within } from '@testing-library/react';

import Cards from './Cards';
import { data } from './data';

describe('Card', () => {
  it('render Card component ', () => {
    render(<Cards card={data} />);
    const renderedCards = screen.getAllByTestId('list-item');
    expect(renderedCards.length).toBe(data.length);
    // screen.debug();
    // const list = screen.getByRole('textbox', {
    //   name: /title/i,
    // });
    // const { getAllByRole } = within(list);
    // const items = getAllByRole('listitem');
    // expect(items.length).toBe(100);
  });
});
