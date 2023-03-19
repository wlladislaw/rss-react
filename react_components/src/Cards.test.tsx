import { render } from '@testing-library/react';

import Cards from './Cards';
describe('Cards', () => {
  it('renders Cards', () => {
    const { getByTestId } = render(<Cards />);
    const component = getByTestId('list');
    expect(component).toHaveClass('cards_container');
  });
});
