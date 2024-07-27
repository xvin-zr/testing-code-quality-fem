// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';
import { render } from 'test/utilities';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  const initCount = Math.round(Math.random() * 100);
  render(<Counter initialCount={initCount} />);

  const currCount = screen.getByTestId('current-count');
  expect(currCount).toHaveTextContent(initCount.toString());
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const { user } = render(<Counter initialCount={5173} />);
  const currCount = screen.getByTestId('current-count');
  const resetButton = screen.getByRole('button', { name: 'Reset' });

  await user.click(resetButton);
  expect(currCount).toHaveTextContent('0');
});
