function trap(height) {
    const n = height.length
    if (n === 0) return 0
    const leftMax = new Array(n).fill(0)
    leftMax[0] = 0
    const rightMax = new Array(n).fill(0)
    rightMax[n - 1] = height[n - 1]
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1])
    }
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1])
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        temp = Math.min(leftMax[i], rightMax[i]) - height[i]
        ans += temp > 0 ? temp : 0
    }
    return ans
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))