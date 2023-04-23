import React from 'react';

const keys = ({ btn, cName, clickHandler }) => (
  <li className={cName}>
    <button
      onClick={clickHandler}
      onKeyDown={clickHandler}
      type="button"
      className="btn-key"
    >
      {btn}
    </button>
  </li>
);

keys.defaultProps = {
  btn: '',
  cName: '',
};

export default keys;
