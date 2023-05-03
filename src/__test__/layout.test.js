import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout';

describe('Should render the diffrent routes', () => {
  it('should render Navigation', () => {
    render(<Layout />, { wrapper: BrowserRouter });
    const calculator = screen.getByText(/Calculator/i);
    expect(calculator).toBeInTheDocument();
  });
  it('should navigate to the tab accordingly', async () => {
    render(<App />);
    const user = userEvent;
    const calculator = screen.getByRole('link', { name: 'Calculator' });
    await user.click(calculator);
    const calcLoaded = screen.getByText(/Lets do some Math/i);
    expect(calcLoaded).toBeInTheDocument();
  });
});
