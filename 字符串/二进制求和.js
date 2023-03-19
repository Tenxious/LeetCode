/*
给你两个二进制字符串，返回它们的和（用二进制表示）。
输入为 非空 字符串且只包含数字 1 和 0。
示例 1:
输入: a = "11", b = "1"
输出: "100"
示例 2:
输入: a = "1010", b = "1011"

*/

function getResult(str1, str2) {
    const arr1 = str1.split('').reverse().map((i) => { return Number(i) })
    const arr2 = str2.split('').reverse().map((i) => { return Number(i) })
    const n = Math.max(arr1.length, arr2.length)
    const resultArr = []
    let flag = 0
    for(let i = 0; i < n; i++) {
        const result = ( arr1[i] || 0 ) + ( arr2[i] || 0 ) + flag
        resultArr.push(result % 2)
        flag = result / 2 >= 1 ? 1 : 0
    }
    if (flag) resultArr.push(1)
    return resultArr.reverse().join('')
}

// 先转换为十进制再求和
function getSum(a, b) {
    const num1 = parseInt(a, 2);
    const num2 = parseInt(b, 2);
    return (num1 + num2).toString(2);
}
const long1 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
const long2 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
const a = "11", b = "1"
console.log(parseInt(long1, 2), parseInt(long2, 2));
console.log(getSum(a, b));