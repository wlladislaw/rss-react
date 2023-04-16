import { render, screen } from '@testing-library/react';
import Form from '../components/Form/Form';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';
const store = setupStore();
test('show form correctly', () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  const nameInput = screen.getByPlaceholderText('Name and Last name');
  const phoneInput = screen.getByPlaceholderText('+*********');
  expect(nameInput).toBeInTheDocument();
  expect(phoneInput).toBeInTheDocument();
});
