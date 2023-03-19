const num1 = 5
const num2 = 7

function getNumbers(num1, num2) {
    const min = Math.max(num1, num2)
    for (let i = min; i <= num1 * num2; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}

// 求出一个整数的因子
function getDivisor(num) {
    const result = []
    for (let i = 0; i < num / 2; i++) {
        const temp = num % i
        if (temp === 0) {
            result.push(i, num / i)
        }
    }
    return result
}

function handle(string) {
    const arr = string.split('');
    const n = arr.length;
    const n = 
    for (let i = 0; i < (8 - n % 8); i++) {
        arr.push(0)
    }
    console.log(arr)
    while (arr.length > 0) {
        console.log(arr.splice(0, 8).join(''))
    }
}
console.log(handle('12345678'));