const list = [1, 2, 3, 4];

const sum = list.reduce((acc, current) => {
    return acc + current
}, 0)

console.log(sum)