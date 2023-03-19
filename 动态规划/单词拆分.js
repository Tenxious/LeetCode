/*
    给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
    注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
    
    示例 1：
    输入: s = "leetcode", wordDict = ["leet", "code"]
    输出: true
    解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
    
    示例 2：
    输入: s = "applepenapple", wordDict = ["apple", "pen"]
    输出: true
    解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
         注意，你可以重复使用字典中的单词。
    
    示例 3：
    输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
    输出: false
*/

// 转移方程：
//  catsandog 双指针 动态规划
function wordBreak(s, wordDict) {
    const setArr = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const str = s.slice(j, i);
            console.log(str);
            if (dp[j] && setArr.has(str)) {
                dp[i] = true;
                break;
            }
        }
    }
    console.log(dp);
    return dp[s.length]
}

const wordDict = ["cats", "dog", "sand", "and", "cat"];
const setArr = new Set(wordDict);
const s = "catsanddog";
const result = wordBreak(s, wordDict)
console.log(result);