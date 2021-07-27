import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Hello World', () => {
  expect(1 + 1).toBe(2);
});

test('Tests whether select is getting rendered', async () => {
  render(<App />);
  expect(
    screen.getByRole('combobox', { name: /cryptoName/i })
  ).toBeInTheDocument();
  const select = screen.getByRole('combobox', { name: /cryptoName/i });
  fireEvent.click(select);
  await screen.findByText(/Bitcoin/i);
  /* screen.debug();
  userEvent.click(item1);
  const { findByText } = within(container);
  expect(await findByText(/Bitcoin/i)).toBeVisible(); */
});
