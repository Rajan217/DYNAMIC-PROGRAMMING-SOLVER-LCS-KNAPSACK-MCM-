import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dynamic Programming Problem Solver</h1>
      <p>Select a problem to solve step-by-step:</p>
      <div className="card-container">
        <Link to="/lcs" className="card">
          <h2>LCS (Longest Common Subsequence)</h2>
          <p>Find LCS of two sequences with step-by-step explanation.</p>
        </Link>
        <Link to="/knapsack" className="card">
          <h2>0/1 Knapsack Problem</h2>
          <p>Maximize value within given weight capacity step by step.</p>
        </Link>
        <Link to="/mcm" className="card">
          <h2>Matrix Chain Multiplication</h2>
          <p>Find optimal matrix multiplication order and cost.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
