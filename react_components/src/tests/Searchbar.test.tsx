import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';
const store = setupStore();
describe('SearchBar', () => {
  it('has input with placeholder', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/people/i)).toBeInTheDocument();
  });
  it('should has focus', () => {
    const { getByTestId } = render(<input type="text" data-testid="inputId" />);
    const input = getByTestId('inputId');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
