const months = ['March', 'Jan', 'Feb', 'Dec'];
const sortedMonths = months.sort();
console.log('original sorted months: ', sortedMonths);
console.log('original months: ', months);
// original sorted months:  [ 'Dec', 'Feb', 'Jan', 'March' ]
// original months:  [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 21, 100000];
const sortedArray1 = array1.sort((a, b) => a - b);
console.log('original  sort() array1: ', sortedArray1);
console.log('original numbers array1: ',array1);
// original  sort array1:  [ 1, 4, 21, 30, 100000 ]
// original numbers array1:  [ 1, 4, 21, 30, 100000 ]

const months2 = ["Mar", "Jan", "Feb", "Dec"];
const toSortedMonths = months2.toSorted();
console.log('toSorted() months2: ',toSortedMonths);
console.log('original months2: ',months2);
// toSorted months2:  [ 'Dec', 'Feb', 'Jan', 'Mar' ]
// original months2:  [ 'Mar', 'Jan', 'Feb', 'Dec' ]

const values = [1, 10, 21, 2];
const toSortedValues = values.toSorted((a, b) => a - b);
console.log('toSorted() values: ', toSortedValues);
console.log('original sort values: ', values);
// sort values:  [ 1, 2, 10, 21 ]
// original sort values:  [ 1, 10, 21, 2 ]