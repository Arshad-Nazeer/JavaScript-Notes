// Callback hell
// Situation in Javascript were callbacks are nested within other callbacks to the degree where te code i difficult to read.
// Old pattern to handle asynchronous functions
// Use promises+async/wait to avoid Callback hell

// synchronous functions:- A synchronous operation blocks the execution until it is completed.
function task1(){
    console.log("Task 1 complete");
}

function task2(){
    console.log("Task 2 complete");
}

function task3(){
    console.log("Task 3 complete");
}

function task4(){
    console.log("Task 4 complete");
}

task1();
task2();
task3();
task4();
console.log("All Tasks Completed")

// Asynchronous Operations
// An asynchronous operation does not block execution.
// Instead of waiting, JavaScript starts the operation and continues executing the next lines.

function task5(){
    setTimeout(() => console.log("Task 5 complete"), 200);
}

function task6(){
    setTimeout(() => console.log("Task 6 complete"), 100); 
}

function task7(){
    setTimeout(() => console.log("Task 7 complete"), 300) 
}

function task8(){
    setTimeout(() => console.log("Task 8 complete"), 150) 
}

task5();
task6();
task7();
task8();
console.log("All Tasks Completed")


// // Using Callback to control the flow (Callback Hell)
function task9(callback){
    setTimeout(() => {
        console.log("Task 9 complete");
        callback();
    }, 2000);
}

function task10(callback){
    setTimeout(() => {
        console.log("Task 10 complete");
        callback();
    }, 1000); 
}

function task11(callback){
    setTimeout(() => {
        console.log("Task 11 complete");
        callback();
    }, 3000); 
}

function task12(){
    setTimeout(() => {
        console.log("Task 12 complete");
        console.log("All Tasks Completed");
    }, 1500);
}

task9(() => {
    task10(() => {
        task11(() => {
            task12();
        });
    });
});
// The next operation is written inside the callback of the previous asynchronous operation.



// Promise
//  They're a better way to represent and manage the results of asynchronous operations.
// an object that tracks that operation and lets you react when it finishes.
// They eliminate deep nesting by allowin Each asynchronous function to return a Promise, allowing the next operation to be chained using .then() instead of nesting.
// A Promise is an object that represents the future result of an asynchronous operation. Think of it like ordering something online.

// You place the order.
// You don't get the package immediately.
// Amazon gives you a promise that:
// ✅ You'll receive the package.
// ❌ Or they'll tell you something went wrong.

// An object that manages asynchronous operations.
// wrap a promise object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new promise((resolve, reject) => {asynchronous code})

// Do These Chores in order:-
// Walk the Dog
// Clean the Kitchen
// Take out the trash


function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked=true;
            if(dogWalked) resolve("You walk the dog 🐶");
            else reject("You Didn't walk the dog");
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned=false;
            if(kitchenCleaned) resolve("You clean the kitchen 🧹");
            else reject("You didn't clean the kitchen");
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut=true;
            if(trashTakenOut) resolve("You take out the trash 🗑️");
            else reject("You didn't take out the trash");
        }, 500);
    });
}

// Callback Hell
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash();
//     });
// });

// Method Chaining (It's a lot easier to write then nested callbacks
// if a operation is rejected, all the subsequent operations halt
walkDog().then(value => {
    console.log(value);
    return cleanKitchen()
}).then(value => {
    console.log(value);
    return takeOutTrash()
}).then(value => {
    console.log(value);
    console.log("You Finished All The Chores");
}).catch(error => console.log(error));



// Async/Await
// async and await are JavaScript keywords that make Promise-based asynchronous code easier to write and read.
// Async makes a function return a promise
// Await makes an async function wait for a promise

// Alows you to write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue
// you cannot use await in a non async function

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finisehed all the chores");
    }catch(error){
        console.error(error);
    }
}

doChores();



