import React from 'react';

const keys = ({ btn, cName }) => <li className={cName}>{btn}</li>;

keys.defaultProps = {
  btn: '',
  cName: '',
};

export default keys;
