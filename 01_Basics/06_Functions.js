// METHOD 1 : NAMED FUNCTION  - can be hoisted

function greet() {
    console.log("Hello, World!");
}

greet(); // Output: Hello, World!

//-----------------------------------------------

//METHOD 2  : ANONYMOUS FUNCTION - not hoisted - used when passing function as an argument

const greet = function() { //-> function() creates a function without a name - this function is assigned to a constant variable greet (which cannot be changed)
    console.log("Hi there!");
};

greet(); // Output: Hi there!

//-------------------------------------------------

//METHOD 3 : ARROW FUNCTION (ES6)

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3)); // Output: 8

//------------------------------------------------------------

//METHOD 4 : FUNCTION WITH PARAMETERS AND RETURN 

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // Output: 20


//---------------------------------------------------------

//METHOD 5 : DEFAULT PARAMETERS

function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Alice"); // Output: Hello, Alice
greet(); // Output: Hello, Guest

//-----------------------------------------------------


//METHOD 6 : REST PARAMETERS  - allows u to accept multiple arg as an array

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10


//---------------------------------------------------------------------------

//METHOD 7 :CALLBACK FUNCTION - a function passed as an arg to another func and executed later

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Bye!");
}

greet("John", sayBye);
// Output:
// Hello John
// Bye!


//----------------------------------------------------------------

//METHOD 8 : IMMEDIATE INVOKED FUNCTION EXPRESSION - a func that runs immediately after its defined

(function() {
    console.log("IIFE executed!");
})();

// Output: IIFE executed!