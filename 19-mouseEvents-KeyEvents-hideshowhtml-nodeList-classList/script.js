//Mouse Events
// eventListener :- listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, callback)


//Whenever an event listener runs, the browser automatically passes an event object to the callback function.
//event is an object that the browser automatically creates whenever an event (like a click, key press, mouse movement, etc.) occurs.
//The purpose of the event object is to tell your function everything about what just happened.
// it need not be passed in addEventListener

const mybox=document.getElementById("mybox");
const mybtn=document.getElementById("mybtn");
function changeColor(event){
    console.log(event);
    event.target.style.backgroundColor = "Tomato";
    event.target.textContent = "Ouch";
}

mybox.addEventListener("click", changeColor);

//arrow expression
mybox.addEventListener("click", (event) =>{
    console.log(event);
    event.target.style.backgroundColor = "Tomato";
    event.target.textContent = "Ouch";
});

//anonymous function
mybox.addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = "Yellow";
    event.target.textContent = "Don't even think about it";
});


mybox.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Don't Click";
});


//using button to trigger event
mybtn.addEventListener("click", changeColor);

function changeColor(event){
    console.log(event);
    mybox.style.backgroundColor = "Tomato";
    mybox.textContent = "Ouch";
}

mybtn.addEventListener("mouseover", (event) =>{
    mybox.style.backgroundColor = "Yellow";
    mybox.textContent = "Don't even think about it";
});


mybtn.addEventListener("mouseout", function(event){
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "Don't Click";
});




// Key Events
// eventListener :- listen for specific events to create interactive web pages
// events: keydown, keyup, keypress(this event isn't compatible with all web browsers)
// document.addEventListener(event, callback)

document.addEventListener("keyup", (event) => {
      console.log(`key up = ${event.key}`);
})

document.addEventListener("keydown", (event) => {
    console.log(`key down = ${event.key}`);
    console.log(event);
    // it will print all the properties of event happened
})



const box=document.getElementById("box");

document.addEventListener("keyup", (event) => {
    box.textContent="KEY";
    box.style.backgroundColor="lightblue";
})

document.addEventListener("keydown", (event) => {
    box.textContent="key pressed";
    box.style.backgroundColor = "tomato";
})

// moving a div
// When you hold down a key, the operating system repeatedly fires keydown events
const box1=document.getElementById("box1");
const movement =10; //10 pixels
let x=0, y=0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp": y-=movement;
                            break;
            case "ArrowDown": y+=movement;
                            break;
            case "ArrowLeft": x-=movement;
                            break;
            case "ArrowRight": x+=movement;
                            break;
        }

        box1.style.top = `${y}px`
        box1.style.left = `${x}px`
    }
});

//**Role of `position: relative`, `top`, and `left`:** By default, HTML elements have `position: static`, so the `top`, `left`, `right`, and `bottom` properties have no effect. Setting `position: relative` keeps the element in the normal document flow but allows it to be moved relative to its original position. It does **not** move the element by itself; it simply enables the use of offset properties. The `left` property specifies how many pixels the element should be shifted horizontally from its original position, while the `top` property specifies how many pixels it should be shifted vertically. A positive `left` value moves the element to the right, a negative value moves it to the left. Similarly, a positive `top` value moves the element downward, while a negative value moves it upward. When `left` and `top` are both `0px`, the element remains in its original position—it does **not** mean the element is located at page coordinates `(0, 0)`; it simply means no offset has been applied from its normal position.
// incase of negative pixels it just moves opposite


// hide/show HTML Element
const btn=document.getElementById("btn");
const img=document.getElementById("img");

btn.addEventListener("click", event => {
    if(img.style.display=="none"){
        img.style.display="block"
        btn.textContent = "hide";
    }else{
        img.style.display = "none";
        btn.textContent = "show";
    }
});

// // to reserve space for image
// btn.addEventListener("click", event => {
//     if(img.style.visibility=="hidden"){
//         img.style.visibility="visible"
//         btn.textContent = "hide";
//     }else{
//         img.style.visibility = "hidden";
//         btn.textContent = "show";
//     }
// });



// NodeLists
// A NodeList is an ordered collection of DOM nodes. It is array-like, meaning you can access elements by index and iterate over them, but it is not a true JavaScript Array
// Static collection of HTML elements by (id, class, element)
// can be created by using querySelectorAll()
// similar to an array, it has forEach(), but no (map, filter, reduce)
// Nodelist won't update to automatically reflect changes

let buttons=document.querySelectorAll(".buttons");
console.log(buttons); //prints properties of each in Nodelist


// Add css/html properties
// buttons.forEach(button => {
//     button.style.backgroundColor="green";
//     button.textContent="😁";
// });

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor="tomato";
    });
});

//Mouse over + mouse out event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor="blue";
    });
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor="green";
    });
});


//creating an HTMl element
const newbutton = document.createElement("button");

// Add css/html properties
newbutton.textContent="Button 5";
newbutton.classList="buttons"; //it inherits the styling of class buttons

document.body.append(newbutton); 
//this doesn't add upto the earlier buttons nodeList because they are static
// Nodelist won't update to automatically reflect changes

buttons=document.querySelectorAll(".buttons");
console.log(buttons); //all 5 buttons


// Remove An element
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        console.log(buttons);
    });
});
//Nodelist will still have all these elements even if removing them from dom

//need to remove manually
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons=document.querySelectorAll(".buttons");
        console.log(buttons);
    });
});


// classLists
// Element property in JavaScript used to interact with an element's list of classes (CSS classes)
// allows you to make resuable classes for many elements across your webpage
// classList is a DOMTokenList that represents all the CSS classes of a single HTML element. It lets you add, remove, toggle, and check classes easily.


// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldclass, newclass)
// contains()

const btn1=document.getElementById("btn1");
btn1.classList.add("enabled");  //only adds new class
// newbutton.textContent="Button 5"; removes all exisitng classes and adds new one

btn1.classList.remove("enabled");

// adding class by events
btn1.classList.add("hover");
btn1.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

btn1.addEventListener("mouseout", ebent => {
    event.target.classList.toggle("hover");
});

btn1.classList.add("enabled")
btn1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent+="disabled";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }
})

// we can reuse html classes among many elements using classList

const h1=document.getElementById("h1");
h1.classList.add("enabled");

h1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent+="disabled";
    }else{
        event.target.classList.replace("enabled", "disabled");
    }
})


// adding classes to buttons of class newbtn
let newbtn=document.querySelectorAll(".newbtn");
newbtn.forEach(btn => {
    btn.classList.add("enabled");
});

newbtn.forEach(btn => {
    btn.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
    btn.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
    btn.addEventListener("click", event => {
        if(event.target.classList.contains("disabled"))
            event.target.textContent+="disabled";
        else
            event.target.classList.replace("enabled", "disabled");
    });
});
