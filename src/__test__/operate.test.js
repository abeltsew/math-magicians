import operate from './operate';

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
  expect(operate('7', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
});
