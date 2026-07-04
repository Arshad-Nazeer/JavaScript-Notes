// Object-Oriented Programming(OOP)
// object:- a collection of related properties and/or methods// can represent real world objects such as people, productys and places
// object = {key:value, function}

const person = {
    fname: "spongebob",
    lname: "squarepants",
    age : 30,
    isemployed: true,

    sayHello: function(){
        console.log("Hi! I am SpongeBob");
    },

    //function expression
    eat: function(){
        console.log("I am Eating roast chicken and pizza");
    }
}

console.log(person.fname);
console.log(person.lname);
console.log(person.age);
console.log(person.isemployed);

person.sayHello();

const person1 = {
    fname: "Patrick",
    lname: "lname",
    age: 42,
    isemployed: false,

    //arrow expression
    sayHello: () => {
        console.log("Hi! I am Patrick");
    },

    eat: function(){
        console.log("I am Eating dirt and crayons");
    }
}


// this:- The this keyword in JavaScript refers to the object that is currently executing the function.
// (the object depends on the immediate context)
// person.name = this.name

console.log(person1.fname);
console.log(person1.lname);
console.log(person1.age);
console.log(person1.isemployed);

const person2 = {
    name: "Arshad",
    favfood: "biryani",
    greet: function(){
        console.log(`Hi i am ${this.name}`);
        console.log(`Hi i am ${person2.name}`);
    },

    eat: function(){
        console.log(`${this.name} is eating ${this.favfood}`);
    }
}

const person3 = {
    name: "Harsh",
    favfood: "redbull",
    greet: function(){
        console.log(`Hi i am ${this.name}`);
        console.log(`Hi i am ${person3.name}`);
    },

    eat: function(){
        console.log(`${this.name} is eating ${this.favfood}`);
    }
}
// this:- The this keyword in JavaScript refers to the object that is currently executing the function.
// (the object depends on the immediate context)
// person.name = this.name
// this leyword deosnt work in arrow expressions

person2.greet();
person2.eat();
person3.greet();
person3.eat();


console.log(this);
console.log(window);
//written at the top level of a normal JavaScript file
//this refers to the global object, which in a browser is window.
//In a browser, all global variables and functions become properties of the window object.

const person4 = {
    name: "Harsh",
    favfood: "redbull",
    greet: function(){
        console.log(this);

    }
}

person4.greet();


// constructor = special method for defining the properties and methods of objects;
// Constructors are special functions used to create multiple objects with the same structure. Instead of manually writing many similar objects, you define a constructor once and use it to create as many objects as you need.
// A constructor is a special method that runs automatically whenever you create a new instance of a class. It initializes the object's properties, often using the values you pass in—or default values if you don't.

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Ford", "mustang", "2024", "Red"); 
const car2 = new Car("chevrolet", "camero", "2025", "yellow"); 

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();


// Class :- (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions
// ex. static, encapsulation, inheritance
//it serves as a blueprint for objects

class products{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    // Properties are created automatically the first time you assign to this.property.
    // No need to declare instance variables beforehand like in C++ or Java.

    displayproduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.name}`);
    }

    calculatetotal(salestax){
        return this.price+(this.price*salestax)/100;
    }
}

const salestax = 5; //precent

const product1 = new products("Shirt", 19.99);
const product2 = new products("Pants", 22.99);

product1.displayproduct();
product2.displayproduct();

console.log(`Total Price including tax is: ${product1.calculatetotal(salestax).toFixed(2)}`);



// Static:- keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.1459;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return radius*2*this.PI;
    }
}



console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));


class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${this.userCount} user online`); //this works for class as well
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

console.log(User.userCount);

const user = new User("Spongebob");
const user1 = new User("Patrick");
const user2 = new User("Sandy");

// console.log(user1.UserCount); the property belongs to class not object
console.log(User.userCount);


user.sayHello();
user1.sayHello();
user2.sayHello();

User.getUserCount();



// inheritance:- allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code resuability

class Animal{
    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
    }

    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name="rabbit";

    run(){
        console.log(`${this.name} is running`);
    }
}

class Fish extends Animal{
    name="fish";

    swim(){
        console.log(`${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name="hawk";

    fly(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//parent properties
console.log(rabbit.alive);
rabbit.eat();
fish.sleep();

//child methods
rabbit.run();  
fish.swim();
hawk.fly();


// super keyword:- keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

class Animal1{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit1 extends Animal1{
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed=runspeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }
}
// Super is used to extend the parent's method in the child class.

class Fish1 extends Animal1{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed=swimspeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed);
    }  
}

const rabbit1 = new Rabbit1("bunny", 2, 25);
const fish1 = new Fish1("nemo", 1, 15);
//Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//common properties can be transferred to parent constructor and called by super();

console.log(rabbit1.name, rabbit1.age, rabbit1.runspeed);
console.log(fish1.name, fish1.age, fish1.swimspeed);

fish1.swim();
rabbit1.run();


// getter:- special methods that makes a property readable
// setter:- special methods that makes a property writeable
//validate and modify a value when reading or writing a property

class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth>0) this._width=newWidth;
        else console.error("Width must be a positive number");
    }

    set height(newHeight){
        if(newHeight>0) this._height=newHeight;
        else console.error("Width must be a positive number");
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return this._width*this._height;
    }
}

const rectangle = new Rectangle(-1000000, "pizza");
// console.log(rectangle.width, rectangle.height);
// it becomes writable via setter

const rectangle1 = new Rectangle(3, 4);
console.log(rectangle1.width, rectangle1.height);
rectangle1.width=-10000;  //this will not change the properties
rectangle1.height="pizza";
console.log(rectangle1.width, rectangle1.height);
console.log(rectangle1.area);


class person5{
    constructor(firstname, lastname, age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    set firstname(newfirstname){
        if(typeof newfirstname === "string" && newfirstname.length>0) this._firstname=newfirstname;
        else console.error("First name must be a non empty string");
    }

    set lastname(newlastname){
        if(typeof newlastname == "string" && newlastname.length>0) this._lastname=newlastname;
        else console.error("last name must be a non empty string");
    }

    set age(newage){
        if(typeof newage == "number" && newage>0) this._age=newage;
        else console.error("Age must be a number and greater than 0");
    }

    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get age(){
        return this._age;
    }

    get fullname(){
        return this._firstname+" "+this._lastname;
    }
}

const newPerson=new person5(420, 69, "Pizza");
console.log(newPerson.firstname, newPerson.lastname, newPerson.age);
//will throw error


const newPerson1=new person5("Spongebob", "Squarepants", 69);
console.log(newPerson1.firstname, newPerson1.lastname, newPerson1.age);
console.log(newPerson1.fullname)