/**
   给定一系列的任务，这些任务可能有依赖关系，有依赖关系必须相继执行，没有依赖关系的可以同时执行。
   写一个函数，计算完成给定所有任务需要的时间
 */

// 示例 下面这任务执行总时间为7
const tasks = [
    {
        name: 'task1',
        time: 1,
        dependency: "",
    },
    {
        name: 'task2',
        time: 2,
        dependency: "",
    },
    {
        name: 'task3',
        time: 3,
        dependency: "task1",
    }, 
    {
        name: 'task4',
        time: 3,
        dependency: "task3",
    },
    {
        name: 'task5',
        time: 4,
        dependency: "task2",
    }
]

function getAllTime(tasks){
    if (!tasks.length) return 0;
    let maxTime = 0;
    const getTaskTime = (task) => {
        if (task.dependency) {
            const dependTask = tasks.find((item) => {
                return item.name === task.dependency
            })
            return task.time + getTaskTime(dependTask)
        } else {
            return task.time
        }
    }
    tasks.map((item) => {
        maxTime = Math.max(maxTime, getTaskTime(item))
    })
    return maxTime;
}

console.log(getAllTime(tasks));