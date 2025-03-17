import React, { useState } from 'react';
import axios from 'axios';
import './LCS.css';

const LCS = () => {
  const [str1, setStr1] = useState('');
  const [str2, setStr2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/lcs', {
        str1,
        str2
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Error solving LCS. Please check input and try again.');
    }
  };

  return (
    <div className="container">
      <h2>Longest Common Subsequence Solver</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First String (e.g., abcde)"
          value={str1}
          onChange={(e) => setStr1(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Second String (e.g., ace)"
          value={str2}
          onChange={(e) => setStr2(e.target.value)}
          required
        />
        <button type="submit">Solve LCS</button>
      </form>

      {result && (
        <div className="result">
          <h4>Length of LCS: {result.lcs_length}</h4>
          <h5>Steps:</h5>
          <ul>
            {result.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LCS; 