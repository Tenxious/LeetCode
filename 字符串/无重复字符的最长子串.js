/*
    给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
    
    示例 1:

    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    示例 2:

    输入: s = "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    示例 3:

    输入: s = "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

*/

// 超时
// function lengthOfLongestSubstring(s) {
//     if (s === '') return 0;
//     let maxLen = 1;
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             let tempStr = s.slice(i, j);
//             if (isNotRepeatedStr(tempStr)) {
//                 maxLen = Math.max(maxLen, j - i);
//                 console.log(tempStr, maxLen, i, j)
//             } else {
//                 break;
//             }
//         }
//     }
//     return maxLen;
// }

// function isNotRepeatedStr(s) {
//     const arr = s.split('');
//     const set = new Set(arr);
//     return arr.length === set.size ? true : false;
// }

function lengthOfLongestSubstring(str) {
    let i = 0, j = 0, maxLen = 0;
    const map = new Map();
    while(i < str.length && j < str.length) {
        if (!map.get(str[j])) {
            map.set(str[j], true);
            maxLen = Math.max(maxLen, j - i + 1);
            j++;
        } else {
            map.set(map.set(str[i], false));
            i++;
        }
    }
    return maxLen;
}

const result = lengthOfLongestSubstring('abcabcbb');
console.log(result);