/*
    给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
    计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
    你可以认为每种硬币的数量是无限的。

    示例 1：
    输入：coins = [1, 2, 5], amount = 11
    输出：3 
    解释：11 = 5 + 5 + 1
    
    示例 2：
    输入：coins = [2], amount = 3
    输出：-1
    
    示例 3：
    输入：coins = [1], amount = 0
    输出：0
*/

// 转移方程：当前dp[i] 等于 之前dp[i - coin]的最小值 + 1
function coinChange(coins, amount) {
    let dp = [];
    for (let i = 0; i <= amount; i++) {
        dp[i] = amount + 1;    // 最大值设置方式：amount + 1
    }
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        for (let c of coins) {
            if (i >= c) {
                dp[i] = Math.min(dp[i - c] + 1, dp[i])
            }
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

const result = coinChange([1, 2, 5], 11);
console.log(result);