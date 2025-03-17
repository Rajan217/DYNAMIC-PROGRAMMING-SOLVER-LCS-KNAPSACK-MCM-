import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>✨ Welcome to DP Problem Solver ✨</h2>
      <p style={styles.subheading}>Select a problem to solve:</p>
      <div style={styles.buttonContainer}>
        <Link to="/lcs" style={styles.link}><button style={styles.button}>Longest Common Subsequence</button></Link>
        <Link to="/mcm" style={styles.link}><button style={styles.button}>Matrix Chain Multiplication</button></Link>
        <Link to="/knapsack" style={styles.link}><button style={styles.button}>0/1 Knapsack</button></Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
    background: '#f7f9fc',
    borderRadius: '12px',
    padding: '20px',
    margin: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#333'
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#666'
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    padding: '12px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: '#007bff',
    color: '#fff',
    transition: 'background 0.3s',
    minWidth: '220px'
  },
  link: {
    textDecoration: 'none'
  }
};

export default Home;
