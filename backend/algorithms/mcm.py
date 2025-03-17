def solve_mcm(arr):
    n = len(arr) - 1  # Number of matrices
    dp = [[0 for _ in range(n)] for _ in range(n)]  # DP table
    steps = []  # To store steps for visualization

    # Fill the DP table
    for length in range(2, n + 1):  # length of matrix chain
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')  # Initialize to infinity
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i] * arr[k + 1] * arr[j + 1]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                # Record this calculation step
                steps.append(
                    f"Calculating dp[{i + 1}][{j + 1}] -> min(dp[{i + 1}][{k + 1}] + dp[{k + 2}][{j + 1}] + {arr[i]}*{arr[k + 1]}*{arr[j + 1]}) = {cost}"
                )

    # Final result is in dp[0][n-1]
    return {
        "min_multiplications": dp[0][n - 1],
        "steps": steps
    }
