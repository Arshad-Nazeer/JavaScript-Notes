// Math:- built-in object that provides properties and methods for mathematical constants and functions.

console.log(Math.PI)
console.log(Math.E) // Euler's number

let num = 4.7;

console.log(Math.round(num)); // Rounds to the nearest integer
console.log(Math.floor(num)); // Rounds down to the nearest integer
console.log(Math.ceil(num)); // Rounds up to the nearest integer
console.log(Math.trunc(num)); // Removes the decimal part, effectively rounding towards zero
console.log(Math.pow(2, 3)); // 2 raised to the power of 3
console.log(Math.sqrt(15)); // Square root of 15 = 3.872983346207417
console.log(Math.log(10)); // Natural logarithm of 10
console.log(Math.sin(num)); // Sine of 4.7 radians
console.log(Math.cos(num)); // Cosine of 4.7 radians
console.log(Math.tan(num)); // Tangent of 4.7 radians
console.log(Math.abs(-4.7)); // Absolute value of -4.7
console.log(Math.sign(-4.7)); // Returns -1 for negative numbers, 1 for positive numbers, and 0 for zero
console.log(Math.min(4, 7, 1, -3, 0)); // Returns the smallest number
console.log(Math.max(4, 7, 1, -3, 0)); // Returns the largest number
console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 (exclusive)


// Random number generator

console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 (exclusive) [0, 1)
console.log(Math.floor(Math.random()*6)); // Returns a random integer between 0 and 5 (inclusive) [0, 5]
console.log(Math.floor(Math.random()*6)+1); // Returns a random integer between 1 and 6 (inclusive), like rolling a dice [1, 6]

const min = 50;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Returns a random integer between 50 and 100 (inclusive) [50, 100]
console.log(Math.floor(Math.random() * (max - min + 1)) + min+1); // Returns a random integer between 51 and 101 (inclusive) [51, 101]
console.log(Math.floor(Math.random() * (max - min)) + min); // Returns a random integer between 50 and 99 (inclusive) [50, 99]
console.log(Math.floor(Math.random() * (max - min)) + min+1); // Returns a random integer between 51 and 100 (inclusive) [51, 100]

 // Formula for a range [min, max] (inclusive)
 // Math.floor(Math.random() * (max - min + 1)) + min
 // Math.floor(Math.random() * RANGE) + STARTING POINT
 // Math.floor(Math.random() * (max - min + 1)) + min ENDING POINT IS EXCLUDED, SO WE ADD 1 TO INCLUDE IT IN THE RANGE.