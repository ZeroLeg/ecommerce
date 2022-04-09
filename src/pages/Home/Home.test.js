import {render, screen} from '@testing-library/react';
import Home from './Home';

test('renders react component', () => {
  render(<Home />);
  const divElement = screen.getByText(/Home/i);
  expect(divElement).toBeInTheDocument();
});
