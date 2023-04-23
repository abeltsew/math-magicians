import React, { useState } from 'react';
import './calculator.css';

import Keys from './Keys';
import calculate from './calculate';
import Quote from './Quote';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (btn) => {
    setObj(calculate(obj, btn));
  };

  return (
    <div className="calculator">
      <div className="result">
        <p>
          {obj?.total}
          {' '}
          {obj?.operation}
          {' '}
          {obj?.next}
        </p>
      </div>
      {[
        ['AC', '+/-', '%', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
      ].map((row) => (
        <ul key={`row${row[0]}`}>
          {row.map((btn) => (
            <Keys
              key={btn}
              cName={btn === '0' ? 'zero' : ''}
              btn={btn}
              clickHandler={() => handleClick(btn)}
            />
          ))}
        </ul>
      ))}
      <Quote />
    </div>
  );
};

export default Calculator;
