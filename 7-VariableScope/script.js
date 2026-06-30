//variable scope:- where a variable is recognized and accessible (local vs global)

//Global Scope - A variable declared outside all functions and blocks is in the global scope.

// Local Scope - A variable declared inside a function or block is local to that function or block. It cannot be accessed from outside.

// var  : Function-scoped; can be redeclared and reassigned.
// let  : Block-scoped; can be reassigned but not redeclared in the same scope.
// const : Block-scoped; cannot be redeclared or reassigned.
// a block can be defined by curly brackets {}

let x=3; //global scope
console.log(x);

func1();
func2();
//they both print different x which are declared differently within their local scope
//variables in functions are abstracted fromm each other

function func1(){
    let x=1;
    console.log(x);
    // it looks for local variable first and then goes for global one
}

function func2(){
    let x=2;
    console.log(x);
}