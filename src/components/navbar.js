import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <Link to="/">
          <h1>Recettes</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/">
              About US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
