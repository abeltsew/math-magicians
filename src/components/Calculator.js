import React, { useState } from 'react';
import './calculator.css';

import Keys from './Keys';
import calculate from './calculate';

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
      <ul className="row1">
        <Keys btn="AC" clickHandler={() => handleClick('AC')} />
        <Keys btn="+/-" clickHandler={() => handleClick('+/-')} />
        <Keys btn="%" clickHandler={() => handleClick('%')} />
        <Keys btn="÷" cName="yellow" clickHandler={() => handleClick('÷')} />
      </ul>
      <ul className="row2">
        <Keys btn="7" clickHandler={() => handleClick('7')} />
        <Keys btn="8" clickHandler={() => handleClick('8')} />
        <Keys btn="9" clickHandler={() => handleClick('9')} />
        <Keys btn="x" cName="yellow" clickHandler={() => handleClick('x')} />
      </ul>
      <ul className="row3">
        <Keys btn="4" clickHandler={() => handleClick('4')} />
        <Keys btn="5" clickHandler={() => handleClick('5')} />
        <Keys btn="6" clickHandler={() => handleClick('6')} />
        <Keys btn="-" cName="yellow" clickHandler={() => handleClick('-')} />
      </ul>
      <ul className="row4">
        <Keys btn="1" clickHandler={() => handleClick('1')} />
        <Keys btn="2" clickHandler={() => handleClick('2')} />
        <Keys btn="3" clickHandler={() => handleClick('3')} />
        <Keys btn="+" cName="yellow" clickHandler={() => handleClick('+')} />
      </ul>
      <ul className="row5">
        <Keys btn="0" cName="zero" clickHandler={() => handleClick('0')} />
        <Keys btn="." clickHandler={() => handleClick('.')} />
        <Keys btn="=" cName="yellow" clickHandler={() => handleClick('=')} />
      </ul>
    </div>
  );
};

export default Calculator;
