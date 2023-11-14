export function makeCounter() {
    let counter = 0;
    function increment() {
        counter+=1;
    }

    function decrement() {
        counter-=1;
    }
    function getCounter() {
        return counter;
    }
    return {
        increment,
        decrement,
        getCounter
    };
}