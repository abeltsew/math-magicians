import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Layout = () => (
  <nav className="nav-bar">
    <ul className="links">
      <li className="logo">
        <Link className="routes" to="/">
          Math Magician
        </Link>
      </li>
      <li className="link">
        <Link className="routes" to="/home">
          Home
        </Link>
      </li>
      <li className="link">
        <Link className="routes" to="/calculator">
          Calculator
        </Link>
      </li>
      <li className="link">
        <Link className="routes" to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Layout;
