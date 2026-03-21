let even = [2, 4, 6, 8, 10];
// array destructuring

// const [first, second] = [...even];
// console.log('first:', first, 'second:', second);

// use of rest operator
const [first, second, ...bachagaye] = even;
console.log('first:', first, 'second:', second);
console.log('jo bach gaye the:', bachagaye);
