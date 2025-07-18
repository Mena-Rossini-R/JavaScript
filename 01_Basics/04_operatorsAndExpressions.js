/*

➤ Arithmetic Operators:   +, -, *, /, %, **
➤ Assignment:  =, +=, -=, etc.
➤ Comparison: ==, !=, ===, !==, >, <, >=, <=
➤ Logical: &&, ||, !
➤ Expressions:  Anything that produces a value :  let x = 5 + 3; // 8 is an expression

*/


// Arithmetic Operators
let a = 10;
let b = 3;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.333...
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000

console.log("\nAssignment Operators:");
let x = 5;
x += 3; // x = x + 3
console.log("x += 3:", x); // 8
x -= 2; // x = x - 2
console.log("x -= 2:", x); // 6

console.log("\nComparison Operators:");
console.log("a == '10':", a == '10'); // true (loose equality)
console.log("a === '10':", a === '10'); // false (strict equality)
console.log("a != b:", a != b); // true
console.log("a !== b:", a !== b); // true
console.log("a > b:", a > b); // true
console.log("a <= b:", a <= b); // false

console.log("\nLogical Operators:");
let isAdult = true;
let hasID = false;
console.log("isAdult && hasID:", isAdult && hasID); // false
console.log("isAdult || hasID:", isAdult || hasID); // true
console.log("!isAdult:", !isAdult); // false

console.log("\nExpressions:");
let result = 5 + 3; // This is an expression
console.log("5 + 3 =", result); // 8