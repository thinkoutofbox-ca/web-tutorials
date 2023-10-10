let personInfo = {
    firstName: 'coding.simplified',
    lastName: 'with.sidhu',
    streetNo: 112,
    phoneNos: ['(111)-999 999', '(222)-999 999'],
    business: {
        streetNo: 224, phoneNos: ['(333)-999 999', '(444)-999 999']
    }
}

let {
    firstName, streetNo, doesntExistDefault = 'bob no exist'
} = personInfo;

console.log(firstName);
// output: coding.simplified
console.log(streetNo);
// output: 112
console.log(doesntExistDefault);
// output: bob no exist
let {
    phoneNos: [personalNo1, personalNo2], business: {streetNo: streetNoAlias, phoneNos}
} = personInfo;

console.log(personalNo1, personalNo2);
// output: (111)-999 999 (222)-999 999
console.log(streetNoAlias);
// output: 224
console.log(phoneNos);
// output: [ '(333)-999 999', '(444)-999 999' ]
let lastName
///error on this line
// {lastName} = personInfo;
// fixed
({lastName} = personInfo);