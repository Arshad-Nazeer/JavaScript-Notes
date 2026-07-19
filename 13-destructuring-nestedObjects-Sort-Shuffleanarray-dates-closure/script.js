// destructuring :- extract values from arrays and objects then assign them to variables in a convinient way
// [] = to perform array destructuring
// {} = to perform object destructuring

//swappng the values of two variables
let a=5, b=8;
console.log(a, b);
[a, b]=[b, a];
console.log(a, b);

// RHS ([b, a]) is a real array. It creates a temporary array containing the current values of b and a.
// LHS ([a, b]) is not a real array. It's an array destructuring pattern that tells JavaScript how to assign values.

const colors = ["red", "green", "blue", "white", "black"];
console.log(colors[0], colors[3]);
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors[0], colors[3]);

//asiging array elements to variables
const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors; // spread/rest operator (...)

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

/// extract values from objects
const person1 = {
    firstName: "Spongebob",
    lastname: "squarepants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastname: "Star",
    age: 34,
}

// const {firstName, lastname, age, job} = person1; 
// console.log(firstName, lastname, age, job);
// object properties and names must match

let {firstName, lastname, age, job} = person2;
console.log(firstName, lastname, age, job);

// const {firstName, lastname, age, job="unemployed"} = person2; // default value
// console.log(firstName, lastname, age, job);

// destructuring in function parameters
function displayPerson({firstName, lastname, age, job="unemployed"}){
    console.log(firstName, lastname, age, job);
}

displayPerson(person1);
displayPerson(person2);



// nested objects:- objects inside other objects.
// allows you to represent more complex data objects
// child object is enclosed by a parent object

const character = {
    fullname: "Squidward",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "126 Conch St.",
        city: "Bikini Bottom",
        country: "International waters"
    }
}

for(const property in character){
    console.log(property);  // it will print property name
    console.log(character[property]);  // it will print property value
}

console.log(character.address);
console.log(character.address.street);
console.log(character.address.city);
console.log(character.address.country);

for(const property in character.address){
    console.log(character.address[property]);
}

//nested objects using class
class Address{
    constructor(street, city, country){
        this.street=street;
        this.country=country;
        this.city=city;
    }
}

class Person{
    constructor(name, age, ...address){
        this.name=name;
        this.age=age;
        this.address = new Address(...address);
    }
}

const newperson = new Person("Plankton", 30, "127 Conch St.", "Bikini Bottom", "International waters");
const newperson1 = new Person("Gary", 30, "128 Conch St.", "Bikini Bottom", "International waters");
const newperson2 = new Person("Mr. Krabs", 30, "129 Conch St.", "Bikini Bottom", "International waters");

console.log(newperson.address);
console.log(newperson.address.street, newperson.address.city, newperson.address.country);



//Array of objects

const fruits = [
    {name: "Apple", color: "red", calories:95}, 
    {name: "orange", color: "orange", calories:45},
    {name: "banana", color: "yellow", calories:105},
    {name: "coconut", color: "white", calories:159},
    {name: "pineapple", color: "yellow", calories:377}
];

console.log(fruits[0].name, fruits[0].color, fruits[0].calories);
console.log(fruits[1].name, fruits[1].color, fruits[1].calories);
console.log(fruits[2].name, fruits[2].color, fruits[2].calories);
console.log(fruits[3].name, fruits[3].color, fruits[3].calories);
console.log(fruits[4].name, fruits[4].color, fruits[4].calories);

fruits.push({name: "grapes", color: "purple", calores: 62});
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(1, 2); //remove at certain indices
console.log(fruits);

//forEach();
fruits.forEach(fruit => console.log(fruit.calories));

const fruitcolors = fruits.map(fruit => {return fruit.color});
console.log(fruitcolors);

const lowcalfruits = fruits.filter(fruit => fruit.calories<100);
console.log(lowcalfruits);

const highcalfruits = fruits.filter(fruit => fruit.calories>=100);
console.log(highcalfruits);

const maxFruit = fruits.reduce((accumulator, element) =>{
    return accumulator.calories > element.calories ? accumulator : element;
});
console.log(maxFruit);



// sort() :- method used to sort elements of an array in-places
// sorts elements as strings in lexicographic order, not alphabetic
// lexicographic = (alphabet+numbers+symbols) as strings

let fruits1 = ["apple", "orange", "banana", "pineapple", "coconut"]
fruits1.sort();
console.log(fruits1);

let numerals = [1, 10, 4, 11, 3, 8, 5, 6, 0];
numerals.sort(); //by default it will convert numbers to strings
console.log(numerals);

// custom camparison function using arrow expression
// It is a function that tells sort() which of two elements should come first. Return values for passing (a, b) :
// negative	-> a comes before b
// positive	-> b comes before a
// 0 -> Either order is fine
numerals.sort((a, b) => a-b);
console.log(numerals)
//descending
numerals.sort((a, b) => b-a);
console.log(numerals)


const people = [{name: "Nobita", age: 10, gpa: 0.6}, 
    {name: "Shizuka", age: 11, gpa: 1.5}, 
    {name: "Goda", age: 10, gpa: 4.5}, 
    {name: "Suneo", age: 9, gpa: 3.5}
]

people.sort(); //This doesnt sort anything
console.log(people);

//ascending
people.sort((a, b) => a.age - b.age);
console.log(people);

//descending
people.sort((a, b) => b.gpa - a.gpa);
console.log(people);

//lexicographic
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

//reverse lexicographic
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);

//localeCompare() compares two strings alphabetically. It returns:
// Negative → first string comes first. first string < second string
// Positive → second string comes first. first string > second string
// 0 → equal.


//shuffling an array
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

cards.sort(() => Math.random()-0.5);
// not proper shuffle, not recommended
// cards.sort(() => Math.random() - 0.5) does not produce a truly random (uniform) shuffle, because the random comparison function violates how sort() is designed to work, comparison function expects a consistent answer, causing some permutations to be more likely than others.

console.log(cards);

// Fisher-Yates Algorithm

shuffle(cards);
console.log(cards);


function shuffle(array){
    for(let i=array.length-1; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));

        [array[i], array[random]] = [array[random], array[i]];  //destructuring

    }
}

//it stops at index 1 beacuse there is nothing left to randomize
// The Fisher–Yates shuffle works by treating the array as two parts: a shuffling part (left) and a final part (right). Starting from the last index, it randomly selects an element from the current shuffling part (indices 0 to i) and swaps it with the element at index i, placing that chosen element into its final random position. After each swap, the final part grows by one element while the shuffling part shrinks by one. This process continues until only one element remains, which is automatically in its correct position. Since every remaining element has an equal chance of being chosen at each step, every possible permutation of the array is equally likely.



// Date Objects:-  Objects that contain values that represent dates and times. These date object can be changed and formatted

let date = new Date();

console.log(date); //current date

// arguement structure for custom date:- Date(year, month, day, hour, minute, second, ms);

date = new Date(2026, 0, 1, 2, 3, 4, 65); //0-11 for months
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
console.log(date);
//the values becomes default values if number of arguements passed are less

//Z stands for UTC time and T stands for Time
date = new Date("2024-01-02T12:00:00Z");
console.log(date);

date = new Date(170000000000000);
console.log(date);
//javaScript treats the number as the number of milliseconds since midnight, January 1, 1970 (UTC). This reference point is called the Unix Epoch.

date=new Date();

const year = date.getFullYear();
console.log(year);
const month = date.getMonth();
console.log(month);
const day = date.getDate();
console.log(day);
const hour = date.getHours();
console.log(hour);
const minutes = date.getMinutes();
console.log(minutes);
const seconds = date.getSeconds();
console.log(seconds);
const dayofweek = date.getDay();
console.log(dayofweek);
const ms = date.getMilliseconds();
console.log(ms);

console.log(date);

date.setFullYear(2024);
console.log(date);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
date.setMilliseconds(169);
console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

console.log(date1==date2)

if(date2>date1) console.log("Happy New Year!");



// closure:- a function defined inside of another function,
// the inner function has access to the variables and scope of the outer function
// Allow for private variables and state maintenance used frequently in JS frameworks: React, Vue, Angular

function outer(){
    let message="Hello World";
    function inner(){
        console.log(message);
    }
    inner();
    // inner has acces to anything declared in outer
    //the variables are considered private
}

outer();

function increment(){
    let count=0;
    count++;
    console.log(`count increaased to ${count}`);
}

increment();
increment();
increment();
// it will remain 1 always
// we can decalre it outside but that will not have any security
// we need to save state

function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    // return {increment: increment}; //returning an object
    return {increment, getCount}; // returning an object with a method
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());

function createGame(){
    //it facilitates state maintenance of score
    let score=0;
    function increaseScore(points){
        score+=points;
        console.log(`${points} pts`);
    }
    function decreaseScore(points){
        score-=points;
        console.log(`${points} pts`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(4);
game.decreaseScore(6);
console.log(game.getScore());





 

