/**
    给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
    子数组 是数组中的一个连续部分。

    示例 1：
    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
    
    示例 2：
    输入：nums = [1]
    输出：1
    
    示例 3：
    输入：nums = [5,4,-1,7,8]
    输出：23
 */

// 转移方程：dp[i]表示以nums[i]为结尾的子数组的最大和
function maxSubArray(nums) {
    const dp = [];
    dp[0] = nums[0];
    // maxSum记录最大值，实时更新
    let maxSum = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        maxSum = Math.max(maxSum, dp[i]);
    }
    dp.sort((a, b) => {return b - a});
    console.log(maxSum)
    return dp[0]
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
const result = maxSubArray(nums);
console.log(result);