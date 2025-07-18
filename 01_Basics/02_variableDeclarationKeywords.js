// --- Using var ---
var name = "Alice";
console.log("Using var:", name); // Output: Alice

var name = "Bob"; // Redeclaring with var is allowed
console.log("After redeclaring with var:", name); // Output: Bob



// --- Using let --- introduced in ES6
let age = 25;
console.log("Using let:", age); // Output: 25

age = 26; // Updating is allowed
console.log("After updating let:", age); // Output: 26

// let age = 30; // ❌ Redeclaring with let in same scope causes an error




// --- Using const ---
const country = "India";
console.log("Using const:", country); // Output: India

// country = "USA"; // ❌ TypeError: Assignment to constant variable
// const country = "Japan"; // ❌ SyntaxError: Identifier 'country' has already been declared

// const must be initialized
// const city; // ❌ SyntaxError: Missing initializer in const declaration