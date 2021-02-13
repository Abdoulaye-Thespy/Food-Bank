import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div>
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
