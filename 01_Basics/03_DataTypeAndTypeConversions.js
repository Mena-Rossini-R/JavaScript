// Data Types and Type Casting

console.log("----- Primitive Data Types -----");

/*

➤ Primitive Data Types:(Stack memory) - stores actual value - immutable (cant use pointers in js)

    Number, String, Boolean, null, undefined, Symbol, BigInt

➤ Reference Types:(Heap memory) - stores reference location (mutable)

    Object, Array, Function, etc.


*/

// Number
let num = 42;
console.log("Number:", num);

// String
let name = "JavaScript";
console.log("String:", name);

// Boolean
let isActive = true;
console.log("Boolean:", isActive);

// Null
let emptyValue = null;
console.log("Null:", emptyValue);

// Undefined
let notAssigned;
console.log("Undefined:", notAssigned);

// Symbol - unique immutable identifiers mostly for object property keys - for more see symbols.js
let sym = Symbol("id");
console.log("Symbol:", sym);

// BigInt (for large integers)
let bigNum = 123456789012345678901234567898765434567890;

//let bigNum = 123456789012345678901234567898765434567890n;   -> n should be there..but my formatter is not letting me  . >_<  .
console.log("BigInt:", bigNum);

//-------------------------------------------------------------------------------------------------------



console.log("\n----- Reference Types -----");

// Array
let arr = [1, 2, 3];
console.log("Array:", arr);

// Object
let person = { name: "Alice", age: 30 };
console.log("Object:", person);

// Function
function greet() {
    return "Hello!";
}
console.log("Function:", greet());

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//                              TYPE CASTING

console.log("\n----- Implicit Type Casting (Type Coercion) -----");

console.log("'5' + 2 =", '5' + 2); // '52' → string
console.log("'5' - 2 =", '5' - 2); // 3   → number
console.log("true + 1 =", true + 1); // 2   → number
console.log("false + 1 =", false + 1); // 1


console.log("\n----- Explicit Type Casting -----");

let strNum = "123";
let convertedNum = Number(strNum);
console.log("String to Number:", convertedNum); // 123

let boolValue = Boolean(0); // false (falsy)
console.log("Number 0 to Boolean:", boolValue);

let numToStr = String(999);
console.log("Number to String:", numToStr); // "999"

let nullToNum = Number(null);
console.log("Null to Number:", nullToNum); // 0

let undefinedToNum = Number(undefined);
console.log("Undefined to Number:", undefinedToNum); // NaN

//undefined is just a mere string whose binary value is noted as specialplaceholder .....so if we convert a string to a number it just return 'NAN'

// to know the acsii value - we use 'string.charCodeAt(index)'


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --                                 

//                                    TYPE CHECKING  OR  TYPE INSPECTION


// console.log(typeof variableName);



let name_1 = "Alice";
let age = 25;
let isStudent = true;
let data = null;
let sym_1 = Symbol("id");
let undef;

console.log(typeof name_1); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof data); // "object" ❗ (special case for null)
console.log(typeof sym_1); // "symbol"
console.log(typeof undef); // "undefined"