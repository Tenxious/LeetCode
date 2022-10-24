/*
    给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

    注意：

    对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
    如果 s 中存在这样的子串，我们保证它是唯一的答案。
    
    示例 1：

    输入：s = "ADOBECODEBANC", t = "ABC"
    输出："BANC"
    示例 2：

    输入：s = "a", t = "a"
    输出："a"
    示例 3:

    输入: s = "a", t = "aa"
    输出: ""
    解释: t 中两个字符 'a' 均应包含在 s 的子串中，
    因此没有符合条件的子字符串，返回空字符串。
*/

// 超时
// function minWindow (s, t) {
//     let i = 0, j = 0;
//     let minLength = Number.MAX_SAFE_INTEGER;
//     let minStr = '';
//     while (j <= s.length) {
//         let tempStr = s.slice(i, j); 
//         if (compareStr(tempStr, t)) {
//             if (tempStr.length < minLength) {
//                 minLength = tempStr.length;
//                 minStr = tempStr;
//             }
//             i++;
//         } else {
//             j++;
//         }
//     }
//     return minStr;
// }

// // 判断字符串1是否覆盖字符串2
// function compareStr (str1, str2) {
//     const strArr1 = str1.split('');
//     const strArr2 = str2.split('');
//     for (let i of strArr2) {
//         const index = strArr1.indexOf(i);
//         if (index !== -1) {
//             strArr1.splice(index, 1);
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

function minWindow (s, t) {
    let map = new Map();
    for (let i of t.split('')) {
        // map.has(i) ? map.set(i, 1) : map.set(i, map.get(i) + 1);
        map.set(i, map.has(i) ? map.get(i) + 1 : 1);
    }
    let minStr = '';
    let needType = map.size;
    let left = 0, right = 0;
    while (right < s.length) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
            if (map.get(s[right]) === 0) {
                needType -= 1;
            }
        }
        
        while (needType === 0) {
            const tempStr = s.substring(left, right + 1);
            if ( !minStr || tempStr.length < minStr.length) {
                minStr = tempStr;
                console.log(minStr);
            }
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1)
                if (map.get(s[left]) === 1) {
                    needType += 1;
                }
            }
            left++;
        }

        right++;
    }
    return minStr;
}

const result = minWindow("ADOBECODEBANC", "ABC");
console.log(result);