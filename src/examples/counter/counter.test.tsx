// @vitest-environment happy-dom

import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { render } from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  const currCount = screen.getByTestId('current-count');
  expect(currCount).toHaveTextContent('0');

  const button = screen.getByRole('button', { name: 'Increment' });
  await user.click(button);
  expect(currCount).toHaveTextContent('1');
});
