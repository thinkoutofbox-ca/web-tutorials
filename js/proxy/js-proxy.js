const user = {
    name: "coding.simplified.with.sidhu",
    greeting: "Hello",
};

const handler1 = {
    get(target, prop, receiver) {
        if (prop === 'greeting') {
            // return Reflect.get(...arguments) + " " + target["name"];
            return Reflect.get(...arguments) + " world";
        }
        return Reflect.get(...arguments);
    }
};

const proxy1 = new Proxy(user, handler1);
console.log(proxy1.name); // coding.simplified.with.sidhu
console.log(proxy1.greeting); // Hello world

const validators = {
    set(obj, prop, value) {
        if (prop === "age") {
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not an integer");
            }
        }
        if (prop === "email") {
            if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/).test(value)) {
                throw new Error("Enter valid email.")
            }
        }
        // The sets default value
        obj[prop] = value;

        // Indicate success
        return true;
    },
};

const person = new Proxy(user, validators);

person.email = "123@gmail.com";
person.age = 27;
console.log(person.age); // 27
console.log(person.email); // 123@gmail.com
//
// person.email = "12gmail.com";
// console.log(person.email); // throws error Enter valid email.

person.age = "12";
console.log(person.age); // throws error The age is not an integer
