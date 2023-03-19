var isValid = function(s) {
    const arr = s.split('')
    const bracketMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])
    const stack = []
    for(let i of arr) {
        if (bracketMap.has(i)) {
            stack.push(i)
        } else {
            if (!stack.length || i !== bracketMap.get(stack[stack.length - 1])) {
                return false
            } else {
                stack.pop()
            }
        }
    }
    return stack.length === 0
};
const s = '([])'
console.log(isValid(s));