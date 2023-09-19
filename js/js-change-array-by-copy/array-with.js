const arr = ["Shanya", "Anais", "Ilana", "Zaire", "Lukas", "Alysia"];
console.log(arr.with(2, 'Leslie'));
// [ 'Shanya', 'Anais', 'Leslie', 'Zaire', 'Lukas', 'Alysia' ]
console.log(arr);
// No change to original array
// [ 'Shanya', 'Anais', 'Ilana', 'Zaire', 'Lukas', 'Alysia' ]

const arrNum = [1, , 3, 4, , 6];
console.log(arrNum.with(0, 2));
// [2, undefined, 3, 4, undefined, 6]
