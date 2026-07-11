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

//JSON works with long string that represent an arary or an object

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
console.log(names);  //gives arary of string
const jsonarray = JSON.stringify(names);
console.log(jsonarray);  //gives one long string

const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
};
console.log(person);
const jsonobject=JSON.stringify(person);
console.log(jsonobject);


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
console.log(people);
const jsonarrayofobject=JSON.stringify(people);
console.log(jsonarrayofobject);



const jsonnames = ` ["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonperson = ` {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
}`;
const jsonpeople = `[{
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
]`;

console.log(jsonnames);
console.log(jsonperson);
console.log(jsonpeople);

const parsednames = JSON.parse(jsonnames);
const parsedperson = JSON.parse(jsonperson);
const parsedpeople = JSON.parse(jsonpeople);

console.log(parsednames);
console.log(parsedperson);
console.log(parsedpeople);