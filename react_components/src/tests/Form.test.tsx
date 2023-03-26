import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../components/Form/Form';

test('submit form correctly', () => {
  render(<Form />);
  const nameInput = screen.getByPlaceholderText('Name');
  const phoneInput = screen.getByPlaceholderText('+*********');
  const dateInput = screen.getByLabelText('Date of birthday');
  const checkboxInput = screen.getByLabelText('Delivery');
  const submitButton = screen.getByRole('button');
  fireEvent.change(nameInput, { target: { value: 'Lev' } });
  fireEvent.change(phoneInput, { target: { value: '+123456789' } });
  fireEvent.change(dateInput, { target: { value: '1990-01-01' } });
  fireEvent.click(checkboxInput);
  fireEvent.click(submitButton);

  const confirmationMessage = screen.queryByText(/Data has been saved! Thanks for order!/i);
  if (confirmationMessage) {
    expect(confirmationMessage).toBeInTheDocument();
  } else {
    expect(confirmationMessage).toBeNull();
  }
});

test('invalid name value', () => {
  render(<Form />);
  const nameInput = screen.getByPlaceholderText('Name');
  const submitButton = screen.getByRole('button');
  fireEvent.change(nameInput, { target: { value: 'lev' } });
  fireEvent.click(submitButton);

  const errorMessage = screen.queryByText(/Invalid value/i);
  if (errorMessage) {
    expect(errorMessage).toBeInTheDocument();
  } else {
    expect(errorMessage).toBeNull();
  }
});

test('invalid phone value', () => {
  render(<Form />);
  const phoneInput = screen.getByPlaceholderText('+*********');
  const submitButton = screen.getByRole('button');
  fireEvent.change(phoneInput, { target: { value: '7234567899899' } });
  fireEvent.click(submitButton);
  const errorMessage = screen.queryByText('Invalid value');
  if (errorMessage) {
    expect(errorMessage).toBeInTheDocument();
  } else {
    expect(errorMessage).toBeNull();
  }
});
