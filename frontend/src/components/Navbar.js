import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">DP Solver</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lcs">LCS</Link></li>
        <li><Link to="/knapsack">Knapsack</Link></li>
        <li><Link to="/mcm">MCM</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
