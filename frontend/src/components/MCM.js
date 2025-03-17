import React, { useState } from 'react';
import axios from 'axios';
import './MCM.css'; // Import CSS for styling

const MCM = () => {
  const [arr, setArr] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const arrList = arr.split(',').map(Number);
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/mcm', { arr: arrList });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Error solving MCM. Check input and try again.');
    }
  };

  return (
    <div className="container">
      <h2>Matrix Chain Multiplication Solver</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter dimensions (comma separated, e.g., 40,20,30,10,30)"
          value={arr}
          onChange={(e) => setArr(e.target.value)}
          required
        />
        <button type="submit">Solve MCM</button>
      </form>

      {result && (
        <div className="result">
          <h4>Minimum Multiplications: {result.min_multiplications}</h4>
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

export default MCM;
