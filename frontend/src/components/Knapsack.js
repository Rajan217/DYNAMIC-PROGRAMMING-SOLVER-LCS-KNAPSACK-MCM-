import React, { useState } from 'react';
import axios from 'axios';
import './Knapsack.css'; // Import CSS file

const Knapsack = () => {
  const [values, setValues] = useState('');
  const [weights, setWeights] = useState('');
  const [capacity, setCapacity] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valArr = values.split(',').map(Number);
    const wtArr = weights.split(',').map(Number);
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/knapsack', {
        values: valArr,
        weights: wtArr,
        capacity: parseInt(capacity)
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Error solving Knapsack. Check input and try again.');
    }
  };

  return (
    <div className="knapsack-container">
      <h2>🎒 0/1 Knapsack Problem Solver</h2>
      <form onSubmit={handleSubmit} className="knapsack-form">
        <input
          type="text"
          placeholder="Enter Values (e.g., 60,100,120)"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Weights (e.g., 10,20,30)"
          value={weights}
          onChange={(e) => setWeights(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Capacity (e.g., 50)"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
        <button type="submit">🚀 Solve Knapsack</button>
      </form>

      {result && (
        <div className="result-section">
          <h3>✅ Maximum Value: {result.max_value}</h3>
          <h4>🔽 Steps:</h4>
          <ul className="steps-list">
            {result.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Knapsack;
