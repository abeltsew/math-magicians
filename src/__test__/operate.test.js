import calculate from '../components/calculate';
import operate from '../components/operate';

describe('Should be abel to do basic operations', () => {
  test('ADD : 1 + 2 to equal 3', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  test('SUBTRACT : 8 - 3 to equal 5', () => {
    expect(operate('8', '3', '-')).toBe('5');
  });

  test('MULTIPLY : 4 x 2 to equal 8', () => {
    expect(operate('4', '2', 'x')).toBe('8');
  });

  test('DIVIDE : 10 ÷ 5 to equal 2', () => {
    expect(operate('10', '5', '÷')).toBe('2');
  });

  test('DIVIDE BY ZERO : 7 ÷ 0 to equal Undefined', () => {
    expect(operate('7', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('MODULUS :  19 % 6 to equal 1', () => {
    expect(operate('19', '6', '%')).toBe('1');
  });

  test('MODULUS BY ZERO : 7 % 0 to equal Undefined', () => {
    expect(operate('7', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
});

describe('it should apply the correct operation', () => {
  it('should clear the values', () => {
    const clear = calculate({ total: 10 }, 'AC');

    expect(Number(clear.total)).toBe(0);
  });

  it('should sum the values', () => {
    const sum = calculate({ total: 10, next: 2, operation: '+' }, '=');

    expect(Number(sum.total)).toBe(12);
    expect(sum).toEqual({
      total: '12',
      next: null,
      operation: null,
    });
  });

  it('should handle decimal or .(dot)', () => {
    const dot = calculate({ total: 0, next: null, operation: null }, '.');

    expect(dot.next).toBe('0.');
  });
});
