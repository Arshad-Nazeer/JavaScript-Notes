// DOM(Document Object Model) :-
// object{} that represents the page you see in the web browser and provides you with an API to interact with it
// web browser contructs the DOM when it loads an HTML document, and structures all the elements in a tree like representation
// we can interact with this tree like structure using document object
// javascript can access the DOM to dynamically change the content, structure, and style of webpage

// document.getElementById();
// document is an object which has a method getElementById() to interact with element of mentioned ID


console.log(document);
//  logs the Document object ).

console.log(document.documentElement.outerHTML);
// gives you the HTML markup as a string.
// document → the entire webpage.
// documentElement → the root HTML element (<html>).
// outerHTML → returns the HTML of that element including the element itself.

console.log(document.body.innerHTML);
//  gives you only the contents inside <body>.
// document.body → selects the <body> element.
// innerHTML → returns only what is inside the <body> tags.

console.dir(document);
//gives properties of object

document.title="My Website";
//changes title of page

document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
document.body.style.color = "white";
//to change theme of page

const username = ""
const welcomeMsg=document.getElementById("welcome-msg");
welcomeMsg.textContent += username==="" ? ' Guest' : username;




// Element Selectors :- Methods used to target and manipuylate HTML elements
// They allow you to select one or multiple elements from the DOM (document object model)
// these are methods of document



const myheading = document.getElementById("my-heading");
myheading.style.backgroundColor = "red";
myheading.style.textAlign = "center";
console.log(myheading); //returns myheading along with its style


// document.getElementsByClassName() //HTML collection
// HTML has less utility methods like it does not have forEach() method but it can be typecasted
// It's like array but not array
const fruits = document.getElementsByClassName("fruits");
console.log(fruits); // It's like array but not array
console.log(fruits[0]);
fruits[0].style.backgroundColor = "red";

for(let fruit of fruits){
    fruit.style.backgroundColor = "blue";
}

// typecasting to array
Array.from(fruits).forEach(fruit => fruit.style.backgroundColor="green");


// document.getElementByTagName()  //HTML Collection
const h4elements = document.getElementsByTagName("h4");
console.log(h4elements);

for(let h4element of h4elements){
    h4element.style.backgroundColor = "blue";
}

const liElements = document.getElementsByTagName("li");Array.from(liElements).forEach(ele => ele.style.backgroundColor = "violet")


// document.getElementById()  //Element or NULL



// document.querySelector()    // First Element or NULL
const element = document.querySelector(".fruits")
// select first element by classes, tags etc
element.style.backgroundColor = "pink";


// document.querySelectorAll()  //Nodelist
// return nodelist of all matching elements
// a nodelist is similar to html collections but it has inbuilt methods like arrays
// nodelists are static, they do not update automatically in the DOM
const foods = document.querySelectorAll(".fruits");
console.log(foods);

foods[0].style.backgroundColor = "Brown";

foods.forEach(food => food.style.fontStyle = "italic");



// DOM navigation:- The process of navigating through the structure of an HTML document using javascript


// .firstElementChild
// select the first child element of the parent selected
const element1 = document.getElementById("newfruits");
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor="Orange";
//apply color to first child of element with id newfruits

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstchild = ulElement.firstElementChild;
    firstchild.style.backgroundColor = "gray";
}); //applies color to first child of each ul



// .lastElementChild
//it gets the alst element of the parent selected
const element2=document.getElementById("vegetables");
const lastchild=element2.lastElementChild;
lastchild.style.backgroundColor = "orange";

const ulElements1 = document.querySelectorAll("ul");
ulElements1.forEach(ulElement1 => {
    const lastchild=ulElement1.lastElementChild;
    lastchild.style.backgroundColor = "orange";
});



// .nextElementSibling
// Selects the next sibling element.
// If the selected element is the last sibling, it returns null.
const element3 = document.getElementById("apple");
const nextsibling = element3.nextElementSibling;
nextsibling.style.backgroundColor = "red";

const element4 = document.getElementById("newfruits");
// it selectes the vegetables ul
const nextsibling1 = element4.nextElementSibling;
nextsibling1.style.backgroundColor = "red";

// .previousElementSibling
// previous sibling of a first child does not exist
const element5 = document.getElementById("potatoes");
const previoussibling = element5.previousElementSibling;
previoussibling.style.backgroundColor = "green";



// .parentElement
// select parent element given child
// // li pie select desserts ul 
const element6 = document.getElementById("pie");
const parent = element6.parentElement;
parent.style.backgroundColor = "green";



// .children
// returns all of the children of specified element as an HTML collection
const element7 = document.getElementById("gravy");
const children = element7.children;
console.log(children);

//selecting by index
children[2].style.backgroundColor="maroon";
//typecasting
Array.from(children).forEach(child => {
    child.style.backgroundColor="maroon";
})




// Add and Change HTML
// STEP1 :- create the element
const newH1 = document.createElement("h1");

// step 2 :- add attributes/css properties
newH1.textContent = "I like Pizza";
newH1.id = "myH1"; //assign id attribute
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// step 3 :- append element to DOM
// note that A DOM element cannot exist in two places at once. Adding it elsewhere moves it rather than copying it.
document.body.append(newH1); //append to the end of page
document.body.prepend(newH1); //place it at the start of the page
document.getElementById("box1").append(newH1); //element cannot be directly accessed like body
document.getElementById("box1").prepend(newH1); //element cannot be directly accessed like body

const box2=document.getElementById("box2");
document.body.insertBefore(newH1, box2); // (newElement, currentElement)
//to sandwhich newH1 between two divs box1 and box2


// if element have no id
const boxes=document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);


// step 4 :- Remove HTML element
document.body.removeChild(newH1); //works for h1 within body
// document.getElementById("box1").removeChild(newH1); //if newH1 exists within div box1, it will give error if it does not exist




// Final
// step 1 :- create the element
const newlistitem = document.createElement("li");

// step 2 :- add attributes/properties
newlistitem.textContent = "coconut";
newlistitem.id="coconut";
newlistitem.style.fontWeight="bold";
newlistitem.style.backgroundColor="lightgreen";

// step 3 :- append element to DOM
// document.body.append(newlistitem);
// document.getElementById("fruitsnew").append(newlistitem);

const orange = document.getElementById("orange1");
document.getElementById("fruitsnew").insertBefore(newlistitem, orange);

// // if lists didnt have IDs
// const boxes1 = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newlistitem, listItem[1]);
