// Callback:- a function that is as an arguement to another function
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