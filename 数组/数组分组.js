// 将数组分成尽量相等的3份

const arr = [11,42,23,4,5,6,4,5,6,11,23,42,56,78,90]
function handleFun(arr, target){
    arr.sort((a,b) => a - b)
    console.log(arr);
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = (start + end) / 2
        console.log(middle);
        let value = arr[middle];
        if (target === value) return middle
        if (target > value) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return -1
}
console.log(handleFun(arr, 90));