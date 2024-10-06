import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('has empty input', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/search/i)).toBeEmptyDOMElement();
  });
  it('has input with placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('check input', () => {
    render(<SearchBar />);
    expect(screen.queryByText(/ Input works/i)).toBeNull();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Input works' },
    });
    expect(screen.queryByText(/Input works/i)).toBeInTheDocument();
  });
  it('should has focus', () => {
    const { getByTestId } = render(<input type="text" data-testid="inputId" />);
    const input = getByTestId('inputId');
    expect(input).not.toHaveFocus();

    input.focus();
    expect(input).toHaveFocus();
  });
});
