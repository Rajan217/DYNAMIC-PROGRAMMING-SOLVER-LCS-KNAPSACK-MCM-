import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LCS from './components/LCS';
import Knapsack from './components/Knapsack';
import MCM from './components/MCM';
import './App.css';  // Import CSS once, at the top or bottom (style preference)

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lcs" element={<LCS />} />
          <Route path="/knapsack" element={<Knapsack />} />
          <Route path="/mcm" element={<MCM />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
