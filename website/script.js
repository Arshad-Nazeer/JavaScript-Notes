// Method Chaining:-  calling one method after another in one continuous line of code

//no method Chaining
let username = "    arshad    ";
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
username = letter+extraChars // concatenate
console.log(username);

//using method Chaining
username = "    arshad    "
username = username.trim().charAt(0).toUpperCase()+username.trim().slice(1);
console.log(username);


//Logical Operators:-  used to combine or manipulate boolean values (true or false)

// AND = &&
let temp=20;
if(temp>0 && temp<=30) console.log("The weather is good");
else console.log("The weather is bad");

// OR = ||
temp=50;
if(temp<=0 || temp>30) console.log("The weather is bad");
else console.log("The weather is good");

// NOT = !
const isSunny=true;
if(!isSunny) console.log("The weather is cloudy");
else console.log("The weather is Sunny");



//Strict Equality Operators
// = assignment Operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values and data types are equal)
// != inequality operator
// !== strict inequality operator


const PI = 3.14;

if(PI == "3.14") console.log("true");
else console.log("false")

if(PI === "3.14") console.log("true");
else console.log("false")

if(PI != "3.14") console.log("true");
else console.log("false")

if(PI !== "3.14") console.log("true");
else console.log("false")



// while loop = repeat soem code while some condition is true

let name="";

while(name == "" || name == null){
    name = window.prompt("Enter Your Name: ");
}

console.log(`Hello!, ${name}`);

// do while loop:- it guarantees one execution of the block

do{
    name = window.prompt("Enter Your Name: ");
}while(name == "" || name == null);  
//it does not require declaration of name

let loggedin=false;
let user;
let password;

/* while(!loggedin){
    user = window.prompt("Enter your user name: ");
    password = window.prompt("Enter your password: ");

    if(user === "myUsername" && password === "myPassword"){
        loggedin = true;
        console.log("You are logged in");
    }else console.log("Invalid credentials");
}
    */

// do{
//     user = window.prompt("Enter your user name: ");
//     password = window.prompt("Enter your password: ");

//     if(user === "myUsername" && password === "myPassword"){
//         loggedin = true;
//         console.log("You are logged in");
//     }else console.log("Invalid credentials");
// }while(!loggedin);

//for loop = repeat some code a imited amount of times

for(let i=0; i<10; i++){
    if(i==4) continue;
    console.log(i);
}

for(let i=10; i>=0; i-=1){
    console.log(i);
}

for(let i=0; i<20; i++){
    if(i==13) break;
    console.log(i);
}