/*
    以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
    请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

    示例 1：
    输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
    输出：[[1,6],[8,10],[15,18]]
    解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

    示例 2：
    输入：intervals = [[1,4],[4,5]]
    输出：[[1,5]]
    解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

// 转移方程：当前dp[i] 等于 之前dp[i - coin]的最小值 + 1
function merge(intervals) {
    intervals.sort((a, b) => {return a[0] - b[0];});                                                                                            
    const result = [];
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i][0]) {
            const right = Math.max(intervals[i][1], intervals[i + 1][1]);
            const temp = [intervals[i][0], right];
            result.push(temp)
        } 
    }
    return result;
}

const intervals = [[2, 6], [15, 18], [1, 3], [8, 10]];
console.log(merge(intervals));