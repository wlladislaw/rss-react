import { render } from '@testing-library/react';

import CardsList from '../components/CardsList/CardsList';
describe('Cards', () => {
  it('renders Cards', () => {
    const { getByTestId } = render(<CardsList cards={[]} />);
    const component = getByTestId('list');
    expect(component).toHaveClass('cards_container');
  });
});
