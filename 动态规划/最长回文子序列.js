/*
    给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
    子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
    
    示例 1：
    输入：s = "bbbab"
    输出：4
    解释：一个可能的最长回文子序列为 "bbbb" 。

    示例 2：
    输入：s = "cbbd"
    输出：2
    解释：一个可能的最长回文子序列为 "bb" 。
*/

// 转移方程：
function longestPalindromeSubseq(s) {
    let dp = [];
    for (let i = 0; i < amount; i++) {
        dp[i] = amount + 1;    // 最大值设置方式：amount + 1
    }
    for (let i = 0; i < n; i++) {
        for (let c of coins) {
            if (i >= c) {
                dp[i] = Math.min(dp[i - c] + 1, dp[i])
            }
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}