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
    let maxRes = 0, maxStr = '';
    for(let i = 0; i < string.length; i++) {
        let str1 = palindrome(string, i , i);
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
    while(left >= 0 && right < string.length && string[left] === string[right]) {
        right++;
        left--;
    }
    return string.slice(left + 1, right)
}

const string = 'avbbbngrtsffsta'
console.log(longestPalindrome(string));