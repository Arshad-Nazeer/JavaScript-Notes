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



 // IF-ELSE statements :- if a condition is true, then the code inside the if block will be executed. If the condition is false, then the code inside the else block will be executed.

let time = 10;

if(time>12){
    console.log("Good afternoon!");
} else {
    console.log("Good morning!");
}

let isRaining = true;
if(isRaining) console.log("Take an umbrella.");
else 
    console.log("No need for an umbrella.");


let age = 18;
let hasVoterID=false;
    
//nested IF-ELSE
if(age==18){
    console.log("You are eligible to vote.");
    if(hasVoterID){
        console.log("you have a voter ID");
    }else{
        console.log("you don't have a voter ID");
    }
} else {
    console.log("You are not eligible to vote.");
}


const text=document.getElementById("mytext");
const submit=document.getElementById("btn");
const result=document.getElementById("result");
let age1;

submit.onclick = function(){
    age1=text.value;
    age1=Number(age1);
    if(age1>=100) result.textContent = "You are too old to enter this site";
    else if(age1==0) result.textContent = "You can't enter. You were just born";
    else if(age1>=18) result.textContent = "You are old enough to enter this site";
    else if(age1<0) result.textContent = "Invalid Age";
    else result.textContent = "you must be 18+ to enter this site";
}


//.checked:- property that determines the checked state of an HTML checkbox or radion button element

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn")
const mastercardbtn = document.getElementById("mastercardbtn")
const paypalbtn = document.getElementById("paypalbtn")
const mysubmit = document.getElementById("mysubmit");
const paymentresult = document.getElementById("paymentresult");
const subresult = document.getElementById("subresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){   //true or false based on checkbox selection
        subresult.textContent = "You are Subscribed!";
    }else subresult.textContent = "You are not Subscribed!"

    if(visabtn.checked) paymentresult.textContent = "You are paying with Visa";
    else if(mastercardbtn.checked) paymentresult.textContent = "You are paying with MasterCard";
    else if(paypalbtn.checked) paymentresult.textContent = "you are paying with Visa";
    else paymentresult.textContent = "You must select a payment option";
}



// Ternary Operator:- a shortcut to if{}  and else{} statements to helps to assign a variable based on a condition
// Format:- condition ? codeIfTrue : codeIfFalse;

let age2=23;
let msg1 = age >=18 ? "You are an Adult" : "You are a Minor";
console.log(msg1);

let time2=12;
let greeting = time2>=12 ? "Good Afternoon" : "Good Morning";
console.log(greeting);

let isemployee=true;
let msg2 = isemployee ? "You are an Employee" : "You are not an Employee";
console.log(msg2);

let purchaseamount = 125;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseamount - purchaseamount*(discount/100)}`); 



//Switch statement:- can be an effective replacement to many else if statements

let day="pizza";

switch(day){
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wednesday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
            break;
    case 7: console.log("Sunday");
            break;
    default: console.log(`${day} is not a valid Day Number`);
            break;
}

let score=80;
let grade;

switch(day){
    case score>=90: grade="A";
                        break;
    case score>=80: grade="B";
                        break;
    case score>=70: grade="C";
                        break;
    case score>=60: grade="D";
                        break;
    case score>=50: grade="E";
                        break;
    default: grade="F";
             break;
}

console.log(grade);



//String Methods :- allows you to manipualte and work with text (strings)

let str=`Arshad Nazeer`;

console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.indexOf(`N`));  //first occurence
console.log(str.length);
console.log(str.charAt(0));

str=`Arshad Nazeer    `;
console.log(str.trim());  //removes extra whitespaces from end or beginning;

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.repeat(3)); //repeat string n number of times within the string


console.log(str.startsWith("Ars")); //returns boolean value based on whether the string starts with the specified string
console.log(str.startsWith("eer")); //returns boolean value based on whether the string ends with the specified string
console.log(str.includes(" ")); //returns boolean value based on whether the string includes the specified character

let phone = "123-456-7890"

console.log(phone.replaceAll("-", ""));
console.log(phone.replaceAll("-", "/"));
console.log(phone.padStart(15, "0")); // Pads the beginning of the string with specified string until it reaches a total length of mentioned no. of characters.
console.log(phone.padEnd(15, "01")); // Pads the end of the string with specified string until it reaches a total length of mentioned no. of characters.
