import React from 'react';
import './calculator.css';

import Keys from './Keys';

const Calculator = () => (
  <div className="calculator">
    <div className="result">
      <p>0</p>
    </div>
    <ul className="row1">
      <Keys btn="AC" />
      <Keys btn="+/-" />
      <Keys btn="%" />
      <Keys btn="/" cName="yellow" />
    </ul>
    <ul className="row2">
      <Keys btn="7" />
      <Keys btn="8" />
      <Keys btn="9" />
      <Keys btn="x" cName="yellow" />
    </ul>
    <ul className="row3">
      <Keys btn="4" />
      <Keys btn="5" />
      <Keys btn="6" />
      <Keys btn="-" cName="yellow" />
    </ul>
    <ul className="row4">
      <Keys btn="1" />
      <Keys btn="2" />
      <Keys btn="3" />
      <Keys btn="+" cName="yellow" />
    </ul>
    <ul className="row5">
      <Keys btn="0" cName="zero" />
      <Keys btn="." />
      <Keys btn="=" cName="yellow" />
    </ul>
  </div>
);

export default Calculator;
