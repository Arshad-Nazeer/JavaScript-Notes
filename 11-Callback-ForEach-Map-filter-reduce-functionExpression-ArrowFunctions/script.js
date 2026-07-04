// Callback:- a function that is passed as an arguement to another function
// Used to handle asynchronous operations
// 1. reading a file
// 2. Network request
// 3. Interacting with database

// "Hey, when you are done, call this next"
// Asynchronous operations in JavaScript are tasks that take some time to complete, such as downloading data from the internet, reading a file, or waiting for a timer. Instead of stopping the entire program and waiting for these tasks to finish, JavaScript starts the operation and continues executing the rest of the code. When the operation is complete, JavaScript returns to it and processes the result. This allows applications to remain fast and responsive, as users can continue interacting with the program while time-consuming tasks run in the background.
// Asynchronous operations in JavaScript are operations that do not block the execution of the rest of the program while waiting for a task to finish. Instead, JavaScript starts the task and continues executing other code. When the task completes, the result is handled later.


hello(goodbye);
// this makes sure goodbye() is executed after hello()
// dont add() or else hello will call goodbye right away

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

sum(displaypage, 4, 7);

function sum(callback, x, y){
    let result=x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displaypage(result){
    document.getElementById("myH1").textContent=result;
}


// forEach():- method used to iterate over the elements of an array and apply a specified funtion (callback) to each element
//array.foreach(callback);
//element, index and array is provided

let numbers = [1, 2, 3, 4, 5];

function double(element, index, array){
    array[index]=2*element;
}

function square(element, index, array){
    array[index]=Math.pow(element, 2);
}

function display(element){
    console.log(element);
}

numbers.forEach(display);
numbers.forEach(double);
numbers.forEach(display);
numbers.forEach(square);
numbers.forEach(display);


let fruits = ["apple", "orange", "coconut"];

function display(element){
    console.log(element);
}

function uppercase(element, index, array){
    array[index]=element.toUpperCase();
}

function lowercase(element, index, array){
    array[index]=element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}

fruits.forEach(display);
fruits.forEach(uppercase);
fruits.forEach(display);
fruits.forEach(lowercase);
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);




//.map():- accepts a callback and applies that function to each element of an array
//it is like forEach but the key difference is it returns a new array
//it if helpful in preserving original array

const num = [1, 2, 3, 4, 5];

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

const squares = num.map(square);
console.log(squares);
const cubes = numbers.map(cube);
console.log(cubes);


const students = ["spongebob", "patrick", "squidward", "sandy"];

function upper(element){
    return element.toUpperCase();
}

function lower(element){
    return element.toLowerCase();
}

const studentsupper = students.map(upper);
console.log(studentsupper);
const studentslower = students.map(lower);
console.log(studentslower);



const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatdates(element){
    const parts = element.split("-");
    return parts.reverse().join("/");
}

const formatteddates = dates.map(formatdates);
console.log(formatteddates);


// .filter() :- creates a new array by filtering out elements

let nums = [1, 2, 3, 4, 5, 6, 7];

function iseven(element){
    return element%2==0;
}

let evennums = nums.filter(iseven);
console.log(evennums);

function isodd(element){
    return element%2!=0;
}

let oddnums = nums.filter(isodd);
console.log(oddnums);


const ages = [16, 17, 18, 19, 20, 21, 60];

function isadult(element){
    return element>=18;
}

const adults = ages.filter(isadult);
console.log(adults);

function ischild(element){
    return element<18;
}

const children = ages.filter(ischild);
console.log(children);



// .reduce() :- reduce the elements of an array into single value

const prices = [50, 34, 97, 56, 32];

function costprice(accumulator, element){
    return accumulator+element;
}
// function costprice(previous, next){
//     return previous+next;
// }
//iterations:- (0, 50)->0+50, (50, 34)->50+34=84, (84, 97) and so on 
// every value returned is added to the accumulator


const total = prices.reduce(costprice);
console.log(total);


const grades = [75, 85, 98, 45, 65];

function getmax(accumulator, element){
    return Math.max(accumulator, element);
}

const maximum = grades.reduce(getmax);
console.log(maximum);

function getmin(accumulator, element){
    return Math.min(accumulator, element);
}

const minimum = grades.reduce(getmin);
console.log(minimum);




// function declaration :- define a resuable block of code that performs a specific task

function helloWorld(){
    console.log("Hello World");
}

// function expressions:- a way to define functions as values or variables

const greeting = function(){
    console.log("Hello World");
}

greeting();

setTimeout(greeting, 3000);  //passing function expression as callback

setTimeout(function(){
    console.log("Hello World");
}, 3000);



const nums1 = [1, 2, 3, 4, 5, 6];

// function sqr(element){
//     return Math.pow(element, 2);
// }
// const sqrs = nums1.map(sqr); 
// instead of function declaration and then passing a callback, we can pass an entire function expression as an arguement to the methods(map, filter, reduce)

const sqrs = nums1.map(function(element){
    return Math.pow(element, 2);
});
//anonymous function expression

console.log(sqrs);

const evennums1 = nums1.filter(function(element){
    return element%2==0;
});

console.log(evennums1);

const total1 = nums1.reduce(function(accumulator, element){
    return accumulator+element;
})

console.log(total1);




// arrow functions:- a concise way to write function expressions good for simple functions that you use only once
// (parameters) => some code

//function declaration
// function greet1(){
//     console.log("Hello");
// }
// greet1();

//function expression
// const greet1 = function(){
//     console.log("Hello");
// }
// greet1();

const greet1 = (name, age) => {
    console.log(`Hello, ${name}`);
    console.log(`You are ${age} years old`);
};
greet1("Arshad", 21);

//function declaration
// setTimeout(hello, 3000);

// function hello1(){
//     console.log("Hello");
// }

//function expression
// setTimeout(function(){
//     console.log("Hello World");
// }, 4000)

setTimeout(() => console.log("hello world"), 3000)


const nums2 = [1, 2, 3, 4, 5, 6];

const squares2 = nums2.map((element)=> Math.pow(element, 2))
console.log(squares2);

const cubes2 = nums2.map((element)=> Math.pow(element, 3))
console.log(cubes2);

const evennums2 = numbers2.filter((element) => element%2==0);
console.log(evennums2);

const total2 = numbers2.reduce((accumulator, element) => accumulator+element);
console.log(total2);

//when there is only one statement no need for return