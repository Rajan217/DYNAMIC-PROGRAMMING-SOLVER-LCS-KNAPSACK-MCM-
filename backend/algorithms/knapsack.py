def solve_knapsack(values, weights, W):
    n = len(values)
    dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
    steps = []

    # Building the DP table
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w])
                steps.append(f"dp[{i}][{w}] = max(Value {values[i-1]} + dp[{i-1}][{w-weights[i-1]}]={dp[i-1][w-weights[i-1]]}, dp[{i-1}][{w}]={dp[i-1][w]}) = {dp[i][w]}")
            else:
                dp[i][w] = dp[i - 1][w]
                steps.append(f"dp[{i}][{w}] = dp[{i-1}][{w}] = {dp[i-1][w]} (Weight too much)")

    return {
        "max_value": dp[n][W],
        "steps": steps
    }
