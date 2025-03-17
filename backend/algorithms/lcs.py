# app.py (Backend)

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for all domains

# Function to solve LCS and return steps
def solve_lcs(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    steps = []

    # Fill the dp table and capture steps
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                steps.append(f"Characters match ({str1[i-1]}): dp[{i}][{j}] = {dp[i][j]}")
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
                steps.append(f"Characters differ: dp[{i}][{j}] = {dp[i][j]} (max of top {dp[i-1][j]} and left {dp[i][j-1]})")

    # Reconstruct LCS
    lcs = []
    i, j = m, n
    while i > 0 and j > 0:
        if str1[i - 1] == str2[j - 1]:
            lcs.append(str1[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -= 1
        else:
            j -= 1
    lcs.reverse()

    return {
        "lcs_length": dp[m][n],
        "lcs_string": ''.join(lcs),
        "steps": steps
    }

# LCS API Route
@app.route('/api/lcs', methods=['POST'])
def lcs_route():
    data = request.get_json()
    str1 = data.get('string1', '')
    str2 = data.get('string2', '')
    result = solve_lcs(str1, str2)
    return jsonify(result)

# Home route
@app.route('/')
def home():
    return "Dynamic Programming Problem Solver API is running!"

# Run the server
if __name__ == '__main__':
    app.run(debug=True)
