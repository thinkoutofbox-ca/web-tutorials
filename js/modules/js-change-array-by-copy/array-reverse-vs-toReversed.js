const array1 = ['one', 'two', 'three'];
const array2 = ['one', 'two', 'three'];
console.log('array1:', array1);
console.log('array2:', array2);
// Expected output: "array1:" Array ["one", "two", "three"]
// Expected output: "array2" Array ["one", "two", "three"]
const reverse = array1.reverse();
const toReversed = array2.toReversed();
console.log('reversed:', reverse);
console.log('reversed:', toReversed);
// Expected output: "reverse:" Array ["three", "two", "one"]
// Expected output: “toReversed:" Array ["three", "two", "one"]
console.log('array1:', array1);
console.log('array2:', array2);
// Careful: reverse is destructive -- it changes the original array.
// Expected output: "array1:" Array ["three", "two", "one"]
//No change to original array.
// Expected output: "array2:" Array [“one", "two", “three"]
