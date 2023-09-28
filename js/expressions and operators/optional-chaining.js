const instaHandle = {
    coding: {
        simplified: {
            with: {
                sidhu: 'coding.simplified.with.sidhu'
            }
        }
    },
};

console.log(instaHandle.coding.simplified.with.sidhu);
// coding.simplified.with.sidhu

console.log(instaHandle.nocoding);
// undefined

//console.log(instaHandle.nocoding.nosimplified);
// error
console.log(instaHandle.nocoding?.nosimplified);
// undefined