import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [problem, setProblem] = useState("lcs");
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      let url = `http://127.0.0.1:5000/api/${problem}`;
      let payload = {};

      if (problem === "lcs") {
        payload = { str1: inputs.str1, str2: inputs.str2 };
      } else if (problem === "knapsack") {
        payload = {
          values: inputs.values.split(",").map(Number),
          weights: inputs.weights.split(",").map(Number),
          capacity: Number(inputs.capacity),
        };
      } else if (problem === "mcm") {
        payload = { arr: inputs.arr.split(",").map(Number) };
      }

      const response = await axios.post(url, payload);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
      setResult("Error occurred. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-gray-100 p-10">
      <h1 className="text-3xl font-bold">DP Problem Solver</h1>

      <select
        className="p-2 rounded border"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      >
        <option value="lcs">Longest Common Subsequence (LCS)</option>
        <option value="knapsack">0/1 Knapsack</option>
        <option value="mcm">Matrix Chain Multiplication (MCM)</option>
      </select>

      {problem === "lcs" && (
        <>
          <input
            type="text"
            name="str1"
            placeholder="Enter first string"
            className="p-2 rounded border w-80"
            onChange={handleChange}
          />
          <input
            type="text"
            name="str2"
            placeholder="Enter second string"
            className="p-2 rounded border w-80"
            onChange={handleChange}
          />
        </>
      )}

      {problem === "knapsack" && (
        <>
          <input
            type="text"
            name="values"
            placeholder="Values (comma-separated)"
            className="p-2 rounded border w-80"
            onChange={handleChange}
          />
          <input
            type="text"
            name="weights"
            placeholder="Weights (comma-separated)"
            className="p-2 rounded border w-80"
            onChange={handleChange}
          />
          <input
            type="number"
            name="capacity"
            placeholder="Capacity"
            className="p-2 rounded border w-80"
            onChange={handleChange}
          />
        </>
      )}

      {problem === "mcm" && (
        <input
          type="text"
          name="arr"
          placeholder="Dimensions (comma-separated)"
          className="p-2 rounded border w-80"
          onChange={handleChange}
        />
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Solve
      </button>

      {result && (
        <div className="mt-5 p-4 bg-white rounded shadow w-80 text-center">
          <h2 className="font-bold">Result: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
