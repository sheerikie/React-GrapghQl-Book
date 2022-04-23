import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Book title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book title/i);
  expect(linkElement).toBeInTheDocument();

});
