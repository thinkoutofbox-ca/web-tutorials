let firstname;
const lastname = null;
const fullName = 'coding.simplified.with.sidhu';

console.log(firstname ?? lastname ?? fullName ?? 'fallback name');
// coding.simplified.with.sidhu

console.log(firstname || lastname || fullName || 'fallback name');
// coding.simplified.with.sidhu

const number_value = 0;

console.log(number_value || 100);
// 100

console.log(number_value ?? 0);
// 0