/*
    编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。
    
    示例 1：

    输入：strs = ["flower","flow","flight"]
    输出："fl"
    
    示例 2：

    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。 
*/

function longestCommonPrefix (strs) {
    if (strs.length === 0) return '';
    let first = strs[0];
    if (first === '') return '';
    let minCommonStr = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < strs.length; i++) {
        const count = twoStrLongestCommonPrefix(first, strs[i]);
        minCommonStr = Math.min(minCommonStr, count);
    }
    return first.slice(0, minCommonStr);
}

function twoStrLongestCommonPrefix (str1, str2) {
    let count = 0;
    let i = 0, j = 0;
    while(i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            count++;
        } else {
            return count;
        }
        i++;
        j++;
    }
    return count;
}

const result = longestCommonPrefix(["flower","flow","flight"]);
console.log(result);