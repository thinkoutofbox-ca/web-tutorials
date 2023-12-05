let user = {
    name: "web tutorials",
    age: 31,

    sayHi() {
        // "this" is the "current object"
        console.log(this.name);
    }

};

user.sayHi();

/*
function addUser() {
    return {
        name: "web tutorials",
        selfRef: this
    };
}

let user1 = addUser();

console.log( user1.selfRef.name ); // Error: Cannot read property 'name' of undefined
*/

function addUser() {
    return {
        name: "web tutorials",
        selfRef() {
            return this;
        }
    };
}

let user1 = addUser();

console.log( user1.selfRef().name ); // web tutorials
