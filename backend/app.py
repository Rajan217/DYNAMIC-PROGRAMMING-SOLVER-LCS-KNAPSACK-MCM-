from flask import Flask, request, jsonify
from flask_cors import CORS

from algorithms.lcs import solve_lcs
from algorithms.knapsack import solve_knapsack
from algorithms.mcm import solve_mcm

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Home route
@app.route('/')
def home():
    return "✅ Dynamic Programming Problem Solver API is running!"

# LCS API Route
@app.route('/api/lcs', methods=['POST'])
def lcs_route():
    data = request.get_json()
    str1 = data.get('str1', '')  # ✅ should match frontend key 'str1'
    str2 = data.get('str2', '')  # ✅ should match frontend key 'str2'
    result = solve_lcs(str1, str2)
    return jsonify(result)

# Knapsack API Route
@app.route('/api/knapsack', methods=['POST'])
def knapsack_route():
    data = request.get_json()
    values = data.get('values', [])
    weights = data.get('weights', [])
    W = data.get('capacity', 0)
    result = solve_knapsack(values, weights, W)
    return jsonify(result)

# Matrix Chain Multiplication API Route
@app.route('/api/mcm', methods=['POST'])
def mcm_route():
    data = request.get_json()
    arr = data.get('arr', [])
    result = solve_mcm(arr)
    return jsonify(result)

# Run the server
if __name__ == '__main__':
    app.run(debug=True)
