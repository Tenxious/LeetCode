/*
    最长回文子串    
    给你一个字符串 s，找到 s 中最长的回文子串
    
    示例1
    输入：s = "babad"
    输出："bab"
    解释："aba" 同样是符合题意的答案。
*/

// 判断是否是回文子串
function isPalindrome(string) {
    const length = string.length;
    for (let i = 0; i < length / 2 - 1; i++) {
        if (string.charAt(i) !== string.charAt(length - i - 1)) {
            return false;
        }
    }
    return true;
}

// 双指针
function longestPalindrome(string) {
    if (string.length === 1) return string;
    let maxRes = 0,
        maxStr = '';
    for (let i = 0; i < string.length; i++) {
        let str1 = palindrome(string, i, i);
        let str2 = palindrome(string, i, i + 1);
        if (str1.length > maxRes) {
            maxRes = str1.length;
            maxStr = str1;
        }
        if (str2.length > maxRes) {
            maxRes = str2.length;
            maxStr = str2;
        }
    }
    return maxStr;
}

// 遍历取回文子串
function palindrome(string, left, right) {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
        right++;
        left--;
    }
    return string.slice(left + 1, right)
}

// 动态规划 字串决定了是否是回文串
// dp方程 dp[i][j] = s[i] === s[j] && dp[i+1][j-1] && j - i > 3
// 边界条件 (j - 1) - (i + 1) + 1> 2    j - i > 3

function longestPalindromeV2(s) {
    const len = s.length;
    if (len < 2) return s;
    // 构建二维数组
    const dp = new Array(len).fill(0).map(() => {
        return new Array(len).fill(false);
    })
    // 初始化
    let maxLen = 0;
    let begin = 0;
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    console.log(dp);
    for (let j = 0; j < len; j++) {
        for (let i = 0; i <= j; i++) {
            console.log(dp[i][j]);
            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    console.log(begin, maxLen);
    return s.slice(begin, maxLen + begin);
}

const string = 'ab'
console.log(longestPalindrome(string));
console.log(longestPalindromeV2(string));