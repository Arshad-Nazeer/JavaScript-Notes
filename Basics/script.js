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
// 3. Supports multi-line strings, variables and JavaScript expressions.

console.log(`Hello, World!`);
console.log(`This is a simple JavaScript file.`);

// displaying an alert message using JavaScript
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
let fullname = 'Arshad Nazeer'
let old = 21;
let Student = true;

document.getElementById('p1').textContent = `My name is ${fullname}`;
document.getElementById('p2').textContent = `My age is ${old}`;
document.getElementById('p3').textContent = `Enrolled ${Student}`;
document.getElementById('myH1').textContent = 'Hello!';
document.getElementById('myP').textContent = 'changing text content of an element in the HTML';

//Arithematic operators:- +, -, *, /, %, ++, --, **
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


/*
    Operator Precedence
    1. Parentheses ()
    2. Exponentiation **
    3. Multiplication *, Division /, Modulus %
    4. Addition +, Subtraction -
    5. Assignment =
 */

let result = 6/2**(2+5); //result = 6/2**7 = 6/128 = 0.046875 
console.log(result)


//User Input:- prompt() method is used to take input from the user in the form of a string. It returns the input value as a string. If the user clicks "Cancel", it returns null.

// 1. EASY WAY - window.prompt() method
// 2. PROFE#SSIONAL WAY - using HTML form and input elements

let username;

username = window.prompt(`Please enter your name: `);
console.log(`Hello, ${username}! Welcome to the JavaScript world.`);

document.getElementById(`mysubmit`).onclick = function(){
    username = document.getElementById(`mytext`).value;
    console.log(`Hello, ${username}! Welcome to the JavaScript world.`);
    document.getElementById(`inputHeading`).textContent = `test successful.`;
}


//type conversion:- converting a value from one data type to another. It can be done explicitly using built-in functions or implicitly by JavaScript during operations.

let age1=window.prompt(`Please enter your age: `);
age1=Number(age1);
age1+=1;
console.log(age1, typeof age1); // This will concatenate the string with 1, resulting in a string like "211" if the user entered "21".

age1=Number(age1); // Explicit conversion from string to number
console.log(age1, typeof age1); // This will now correctly add 1 to the number, resulting in 22 if the user entered "21".

let p="pizza";
let q="pizza";
let r="pizza";

p=Number(p);
q=String(q);
r=Boolean(r);
console.log(p, typeof p); //Nan
console.log(q, typeof q);  //string
console.log(r, typeof r); //true

// let p="0";
// let q="0";
// let r="0";

// p=Number(p);
// q=String(q);
// r=Boolean(r);
// console.log(p, typeof p); //0
// console.log(q, typeof q); //string
// console.log(r, typeof r); //true

// let p="";
// let q="";
// let r="";

// p=Number(p);
// q=String(q);
// r=Boolean(r);
// console.log(p, typeof p); //0
// console.log(q, typeof q); //string
// console.log(r, typeof r);  //false

// let p;
// let q;
// let r;

// p=Number(p);
// q=String(q);
// r=Boolean(r);
// console.log(p, typeof p); //NaN
// console.log(q, typeof q); //undefined string
// console.log(r, typeof r);  //false


//const = variabble that cant be changed after initialization(nor reassigned nor redeclared). It is block-scoped and must be initialized at the time of declaration. It is used to declare constants, which are values that should not change throughout the program.

const PI = 3.14159;
let radius;
let circumference;

// radius =window.prompt(`Please enter the radius of the circle: `);
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log(`The circumference of the circle is: ${circumference}`);

document.getElementById(`calculate`).onclick = function(){
    radius = document.getElementById(`radius`).value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(`The circumference of the circle is: ${circumference}`);
    document.getElementById(`circumference`).textContent = `The circumference of the circle is: ${circumference}`;
}