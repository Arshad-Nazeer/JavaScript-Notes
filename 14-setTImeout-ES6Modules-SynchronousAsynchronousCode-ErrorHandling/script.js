// setTimeout() :- function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the javascript runtime environment)
// setTimeout(callback, delay)

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

//anonymous function
setTimeout(function(){window.alert("Hello");}, 4000);

//arrow expression
setTimeout(() => {window.alert("Hello")}, 4000);

//clearTimeout(timeoutID) :- can cancel a timeout before it triggers

const timeoutID = setTimeout(() => window.alert("Hello World"), 3000);
clearTimeout(timeoutID); 
//Cancel the timer whose ID is timeoutID.

// buttons to start a timer and button to stop it in between
let timeoutID1;
function startTimer(){
    timeoutID1=setTimeout(() => window.alert("Hello Timer"), 3000);
    console.log("Started");
}


function clearTimer(){
    clearTimeout(timeoutID1);
    console.log("Cleared");
}



//ES6 Module :- an external file that contains reusable code that can be imported into other JavaScript files.
// write reusable code for many different apps
// can contain variables, classes, functions ... and more 
//Introduced as part of ECMAscript 2015 update

// object destructuring to get variables, methods
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

console.log(`${getCircumference(5.00).toFixed(2)} cm`);
console.log(getArea(10));
console.log(getVolume(12));



//synchronous code:- executes line by line consecutively in a sequential manner
//code that waits for an operation to complete

console.log("task 1");
console.log("task 2");
console.log("task 3");

// asynchronous code:- allows multiple operations to be performed concurrently without waiting 
// Doesn't block the execution flow and allows the program to continue
// typically used with (I/O operations, network request, fetching data) anything that could take an indeterminant amount of time
// Handled with: Callbacks, Promises, Async/Await

setTimeout(() => console.log("task 1"), 5000);
// task 2, 3, 4, completes earlier and task 1 finishes last because it is an asynchrounos code that runs concurrently with the rest of the code, the rest of the code doesnt wait around

console.log("task 2");
console.log("task 3");
console.log("task 4");


function func1(callback){
    setTimeout(() => {
        console.log("task 1")
        callback();
    }, 5000);
}

function func2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}

func1(func2);
// to make sure task 2, 3, 4 completes after task 1 using callbacks to handle asynchronous code



//Error handling
// Error :- an object that is created to represent a problem that occurs
// occurs often with user input or establishing a connection

// console.lag("Hello"); //error in log
// // Uncaught TypeError: console.lag is not a function 
// console.log(x);
// // Uncaught ReferenceError: x is not defined

// these errors interrupt the flow of the program, we never each the end
// it create issues like : network errors, promise rejection, security errors

// solution:- 
// try { } :- encloses code that might potentially cause an error
// catch {} -> catch and handle any thrown errors from try {}
// finally {} :- {optional} always executes. Uzed mostly for clean up. example:- close files, close connections, release resources

try{
    console.log(x);  //undefined x
    // Network errors
    // Promise rejection
    // Security Errors
}
catch(error){
    console.error(error);
} // now program will reach end
finally{
    // finally is mainly used for cleanup—things that should happen no matter what.
    // close files
    // close connect3ions
    // release resources
    console.log("This always executes")
}

//input error (malicious input)
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    //calling error constructor to create an intentional error
    if(divisor==0) throw new Error("You can't divide by zero");
    if(isNaN(dividend) || isNaN(divisor)) throw new Error("Values must be a number");

    const result=dividend/divisor;
    console.log(result); //anotehr error
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");
