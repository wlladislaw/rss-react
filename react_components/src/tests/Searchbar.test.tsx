import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('has empty input', () => {
    render(<SearchBar handleSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeEmptyDOMElement();
  });
  it('has input with placeholder', () => {
    render(<SearchBar handleSearch={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
  it('should has focus', () => {
    const { getByTestId } = render(<input type="text" data-testid="inputId" />);
    const input = getByTestId('inputId');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
