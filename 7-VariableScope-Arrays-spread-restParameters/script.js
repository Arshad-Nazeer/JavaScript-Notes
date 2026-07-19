//variable scope:- where a variable is recognized and accessible (local vs global)

//Global Scope - A variable declared outside all functions and blocks is in the global scope.

// Local Scope - A variable declared inside a function or block is local to that function or block. It cannot be accessed from outside.

// var  : Function-scoped; can be redeclared and reassigned.
// let  : Block-scoped; can be reassigned but not redeclared in the same scope.
// const : Block-scoped; cannot be redeclared or reassigned.
// a block can be defined by curly brackets {}

let x=3; //global scope
console.log(x);

func1();
func2();
//they both print different x which are declared differently within their local scope
//variables in functions are abstracted fromm each other

function func1(){
    let x=1;
    console.log(x);
    // it looks for local variable first and then goes for global one
}

function func2(){
    let x=2;
    console.log(x);
}

//array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1]="coconut";
console.log(fruits[1]);

fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("mango");  //pushes at the beginning
console.log(fruits);
fruits.shift();  //pops at the beginning
console.log(fruits);

console.log(fruits.length);

console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("mango"));   // returns -1


for(let i=0; i<fruits.length; i++) console.log(fruits[i]);

for(let k of fruits) console.log(k);  //enhanced form of for loop like auto in c++

fruits.sort();
console.log(fruits);
fruits.sort().reverse();
console.log(fruits);


//spread operator(...):- allows an iterable such as an array or a string to be expanded into seprarate elements(unpacks the element)
//It makes copying, combining, and passing data much easier.
// Spread operator (...): It unpacks an array (or object) into its individual elements (or properties). An array is a single value, while ...array is not an array—it's just the array's elements inserted wherever they're used.

let numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log(...numbers);

// console.log(Math.max(numbers))  //this won't work
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

let username="Arshad Nazeer";
console.log(...username);
console.log(username);
let letters = [...username];  //divides username into different characters 
console.log(letters);
letters = [...username].join("-"); //join each character of name using specified character
console.log(letters); //returns a string

let fruits1= ["apple", "orange", "banana"];
let newfruits = [...fruits1];

console.log(fruits1);
console.log(...fruits1);
console.log(newfruits);

let vegetables = ["carrots", "onion", "potatoes"]
let foods=[...fruits1, ...vegetables];
console.log(foods);



// rest parameters(...rest):- allow a function to work with a variable number of arguments by bundling them into an array (opposite of spread)
// spread:- expands an array into seperate elements
// rest:-  bundles seperate elements into an array

function openFridge(...foods){  //rest parameter
    console.log(foods);  //array
    console.log(...foods);  //elements
}

function getfood(...foods){ 
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

openFridge(food1, food2, food3, food4);   //the function can accept variable number of arguements


const newfoods = getfood(food1, food2, food3, food4);
console.log(newfoods);

function sum(...numbers){
    let result = 0;
    for(let k of numbers){
        result+=k;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

function average(...numbers){
    let result = 0;
    for(let k of numbers){
        result+=k;
    }
    return result/numbers.length;
}

console.log(average(100, 75, 88, 43));


function combinestring(...str){
    return str.join(" ");
}

console.log(combinestring("Mr", "SpongBob", "Squarepants", "III"));