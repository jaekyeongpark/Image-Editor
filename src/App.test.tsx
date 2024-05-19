import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Rendered well', async () => {
    const { container } = render(<App />);

    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();
    expect(screen.getByText('Vite + React')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});