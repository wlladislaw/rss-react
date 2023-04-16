import FormsList from '../components/FormsList/FormsList';
import { setupStore } from '../redux/store';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = setupStore();
const mockForms = [
  {
    name: 'John',
    phone: '1234567890',
    date: '01/01/2000',
    select: 'Credit card',
    checkbox: true,
    gender: 'Male',
    file: 'https://example.com/image.jpg',
  },
  {
    name: 'Jane',
    phone: '0987654321',
    date: '02/02/2001',
    select: 'PayPal',
    checkbox: false,
    gender: 'Female',
    file: 'https://example.com/another-image.jpg',
  },
];

const mockStore = createStore((state = { submittedFormsReducer: { forms: mockForms } }) => state);

test('renders the correct form data', () => {
  const { getByText, getByAltText } = render(
    <Provider store={mockStore}>
      <FormsList />
    </Provider>
  );

  expect(getByText('Name: John')).toBeInTheDocument();
  expect(getByText('Phone: 1234567890')).toBeInTheDocument();
  expect(getByText('Birthday: 01/01/2000')).toBeInTheDocument();
  expect(getByText('Payment method: Credit card')).toBeInTheDocument();
  expect(getByText('Delivery: need delivery')).toBeInTheDocument();
  expect(getByText('Gender: Male')).toBeInTheDocument();
  expect(getByAltText('John')).toBeInTheDocument();

  expect(getByText('Name: Jane')).toBeInTheDocument();
  expect(getByText('Phone: 0987654321')).toBeInTheDocument();
  expect(getByText('Birthday: 02/02/2001')).toBeInTheDocument();
  expect(getByText('Payment method: PayPal')).toBeInTheDocument();
  expect(getByText('Delivery: without delivery')).toBeInTheDocument();
  expect(getByText('Gender: Female')).toBeInTheDocument();
  expect(getByAltText('Jane')).toBeInTheDocument();
});

test('displays ', () => {
  const { container } = render(
    <Provider store={store}>
      <FormsList />
    </Provider>
  );
  const loadingElement = container.querySelector('h3');
  expect(loadingElement).toHaveTextContent('SAVED FORMS :');
});
