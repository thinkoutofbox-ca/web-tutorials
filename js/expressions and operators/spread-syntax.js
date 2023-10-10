function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// output: 6

console.log(sum.apply(null, numbers));
// output: 6

// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable
//
// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }