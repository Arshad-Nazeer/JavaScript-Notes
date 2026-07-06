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

const timeoutID = setTimeout(() => console.alert("Hello World"), 3000);
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
