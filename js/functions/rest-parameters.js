function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));
// output: 6

console.log(sum(1, 2, 3, 4));
// output: 10

