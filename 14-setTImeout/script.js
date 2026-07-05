// setTimeout() :- function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the javascript runtime environment)
// setTimeout(callback, delay)

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);