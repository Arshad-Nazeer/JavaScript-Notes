// Single Quotes ('')
// 1. Used to create normal strings.
// 2. Does not support variable interpolation (${ }).
// 3. Useful when the string contains double quotes (").

// Double Quotes ("")
// 1. Also used to create normal strings.
// 2. Behaves the same as single quotes.
// 3. Useful when the string contains apostrophes (').

// Backticks (` `)
// 1. Used to create template literals.
// 2. Supports variable interpolation using ${ }.
// 3. Supports multi-line strings and JavaScript expressions.

console.log(`Hello, World!`);
console.log(`This is a simple JavaScript file.`);

//displaying an alert message using JavaScript
window.alert(`This is an alert message from the script.js`);
window.alert(`another alert message from the script.js`);

//This is a comment in JavaScript

/*
This is a multi-line comment in JavaScript
It can span multiple lines
*/


// variable:- a container that stores a value, behaves as if it were the value it contains
let x;    // 1. declaration:- var, let, const
x=100;     // 2. initialization/assignment:- assigning a value to a variable

console.log(x);

// var  : Function-scoped; can be redeclared and reassigned.
// let  : Block-scoped; can be reassigned but not redeclared in the same scope.
// const : Block-scoped; cannot be redeclared or reassigned.

// Data types:- 
// 1. primitive data types(string, number, boolean, null, undefined, symbol):- Primitive data types store a single, simple value. They are immutable, meaning their value cannot be changed directly.
// 2. non-primitive data types(object, array, function):- Non-primitive data types store collections of values or complex data. Variables hold a reference (memory address) to the data rather than the data itself.

// Numbers
let age=21;
let price=10.99;
let cgpa=8.76;

console.log(typeof age);
console.log(typeof price);
console.log(typeof cgpa);
console.log(`You are ${age} years old`); 
console.log(`The price is $${price}`); 
console.log(`Your CGPA is ${cgpa}`); 

// Strings
let firstName = `Arshad`;
var fvrtColor = `Blue`;
const email = `arsha123n@gmail.com`;
console.log(typeof firstName);
console.log(`My name is ${firstName}`);
console.log(`My favorite color is ${fvrtColor}`);
console.log(`My email is ${email}`);


//boolean 
let online = true;
let isStudent = false;
console.log(typeof online);
console.log(`I am ${online}`);
console.log(`Enrolled: ${isStudent}`);

// using javascript to display the values of the variables in the HTML page using DOM manipulation
let fullname = 'Arshad Nazeer';``
let old = 21;
let Student = true;

document.getElementById('p1').textContent = `My name is ${fullname}`;
document.getElementById('p2').textContent = `My age is ${old}`;
document.getElementById('p3').textContent = `Enrolled ${Student}`;
document.getElementById('myH1').textContent = 'Hello!';
document.getElementById('myP').textContent = 'changing text content of an element in the HTML';

//Arithemtatic operators:- +, -, *, /, %, ++, --, **
let a=10;
let b=3;
let c = a + b;
console.log(`The sum of ${a} and ${b} is ${c}`)
c= a - b;
console.log(`The difference of ${a} and ${b} is ${c}`)
c= a * b;
console.log(`The product of ${a} and ${b} is ${c}`)
c= a / b;
console.log(`The quotient of ${a} and ${b} is ${c}`)
c= a % b;
console.log(`The remainder of ${a} and ${b} is ${c}`)
c= a ** b;
console.log(`The result of ${a} to the power of ${b} is ${c}`)
console.log(`The value of a after increment is ${++a}`)
console.log(`The value of b before decrement is ${b--}`)
c+=a; // c = c + a
console.log(`The value of c after adding a is ${c}`)


