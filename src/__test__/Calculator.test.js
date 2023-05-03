import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('should handle click events', () => {
  it('should render the Clear Button', () => {
    render(<Calculator />);

    expect(screen.queryByText('AC')).toBeInTheDocument();
  });

  it('Should show the add two numbers in the screen', () => {
    const { getByText } = render(<Calculator />);
    const button1 = getByText('2');
    const buttonP = getByText('+');
    const button2 = getByText('3');

    fireEvent.click(button1);
    fireEvent.click(buttonP);
    fireEvent.click(button2);

    const result = getByText('2 + 3');

    expect(result).toBeInTheDocument();
  });

  it('Should show the add two numbers in the screen', () => {
    const { getByText } = render(<Calculator />);
    const button1 = getByText('2');
    const buttonP = getByText('x');
    const button2 = getByText('3');
    const buttonE = getByText('=');

    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(buttonP);
    fireEvent.click(button2);
    fireEvent.click(buttonE);

    // 22x3

    const result = getByText('66');

    expect(result).toBeInTheDocument();
  });
});
