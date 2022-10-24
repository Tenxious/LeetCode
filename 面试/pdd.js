const logs = [{
    id: 1,
    times: 7
}, {
    id: 2,
    times: 3
}, {
    id: 3,
    times: 5
}, {
    id: 3,
    times: 7
}, {
    id: 2,
    times: 11
}]
const range = [0, 10]

function handleArr(logs, range) {
    const map = new Map()
    logs.map((item) => {
        if (map.has(item.id)) {
            if (item.times > range[0] && item.times < range[1]) {
                map.set(item.id, map.get(item.id) + 1)
            }
        } else {
            map.set(item.id, 1)
        }
    })
    return map;
}

const result = handleArr(logs, range);
console.log(result);