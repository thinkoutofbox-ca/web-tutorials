const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log('Original after splice() months: ', months);
// Original after splice() months:
// Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log('Original after splice() months: ', months);
// Original after splice() months:
// Array ["Jan", "Feb", "March", "April", "May"]

const months1 = ["Jan", "Mar", "Apr", "May"];
// Inserting an element at index 1
const months2 = months1.toSpliced(1, 0, "Feb");

console.log('toSpliced() months2: ', months2);
console.log('Original months1: ', months1);
//toSpliced() months2: ["Jan", "Feb", "Mar", "Apr", "May"]
// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);

console.log('toSpliced() months3: ', months3);
console.log('Original months1: ', months1);
//toSpliced() months3: ["Jan", "Feb", "May"]
// Original array is not modified
//Original months1: ["Jan", "Mar", "Apr", "May"]