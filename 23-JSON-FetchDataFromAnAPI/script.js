// JSON (JavaScript Object Notation)
// dat-interchange formatdates
// Used for exhanging dat between a server and a web applications
// JSON files can be:-
// objects {key: value} 
// arrays [value1, value2, value3]
// an object can contain arrays
// array can also contain objects


// JSON.strigify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object

//JSON works with long string that represent an arry or an object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
};
const people=[{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}
];

console.log(names);  //gives arary of string
console.log(person);
console.log(people);

const jsonarray = JSON.stringify(names);
const jsonobject=JSON.stringify(person);
const jsonarrayofobject=JSON.stringify(people);

console.log(jsonarray);  //gives one long string
console.log(jsonobject);
console.log(jsonarrayofobject);



const jsonnames = ` ["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonperson = ` {"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["jellyfishing", "karate", "cooking"]}`;
const jsonpeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
{"name": "Patrick", "age": 34, "isEmployed": false},
{"name": "squidward", "age": 50, "isEmployed": true},
{"name": "Sandy", "age": 27, "isEmployed": false}]`;

console.log(jsonnames);
console.log(jsonperson);
console.log(jsonpeople);

const parsednames = JSON.parse(jsonnames);
const parsedperson = JSON.parse(jsonperson);
const parsedpeople = JSON.parse(jsonpeople);

console.log(parsednames);
console.log(parsedperson);
console.log(parsedpeople);



// fetch 
// Funtion used for making HTTP requests to fetch resources
// HTTP requests are messages sent by a client (such as a web browser, mobile app, or JavaScript code) to a server asking it to perform an action or return some data.
// (JSON style data, images, files)
// Simplifies asynchronous data fetching in Javascript and used for interacting with APIs to retrieve and send data asynchronously over the web
// fetch(url, {options})
// options:- get(delete), put, post, delete

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));
// response.json() returns a promise
// add relative path

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value));

// print each object
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.error(error));


// fetch("people.json") → Sends an asynchronous HTTP GET request and immediately returns a Promise<Response>.
// response → Receives the resolved HTTP Response object containing the status, headers, and response body.
// response.json() → Asynchronously reads the response body, parses the JSON text, and returns a Promise<Object/Array>.
// values → Receives the resolved JavaScript array/object parsed from the JSON data.
// values.forEach(...) → Iterates through each object in the parsed array.
// console.log(value.age) → Accesses and prints the age property of each object.
// .catch(...) → Executes if any Promise in the chain is rejected due to a network, parsing, or other error.

// response.json() internally reads the response body as text and then parses that JSON text into a JavaScript object or array.
// Response → The complete HTTP response containing status, headers, URL, and body.
// JSON Text → Raw JSON string received from the server (obtained using response.text()).
// JavaScript Object/Array → Parsed JSON data that you can access with dot (.) or bracket ([]) notation (obtained using response.json() or JSON.parse())


// fetch is promise based so it can be resolved or rejected
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => console.log(response))
    .catch(error => console.error(error));
// status code in response dentes status of fetch request(example:- 200, 404)
// The ok property of the Response object is a boolean that tells you whether the HTTP request was successful.

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
        console.log(data.id);
    })
    .catch(error => console.error(error));



fetch("https://pokeapi.co/api/v2/pokemon/Spongebob")
.then(response => console.log(response))
.catch(error => console.error(error))
// the prmoise will be resolved and it will give status code 404 meaning the resource could not be found because Spongebob pokemon does not exist

fetch("https://pokeapi.co/api/v2/pokemon/Spongebob")
.then(response => {
    if(!response.ok) throw new Error("could not fetch resource");
    else response.json();
})
.catch(error => console.error(error))



// using async/await
fetchData();

async function fetchData(){
    try{
        const reponse=await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if(!respoonse.ok){
            throw new Error("could not fetch resource");
        }
        const data=await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}