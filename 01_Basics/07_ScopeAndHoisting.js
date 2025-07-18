//          SCOPE

//GLOBAL SCOPE - OUTSIDE THE FUNCTION

let name = "Alice"; // Global scope

function greet() {
    console.log(name); // Can access global variable
}

greet(); // Output: Alice

//-----------------------------------------------------

//FUNCTION SCOPE - DECLARED INSIDE A FUNC AND ARE ONLY ACCESSIBLE INSIDE THAT FUNCTION

function sayHi() {
    let msg = "Hi!";
    console.log(msg); // OK
}

sayHi();
// console.log(msg); // ❌ Error: msg is not defined



//BLOCK SCOPE - inside a block like if, while, for etc

if (true) {
    let x = 5;
    const y = 10;
    var z = 15;
}

// console.log(x); // ❌ Error
// console.log(y); // ❌ Error
console.log(z); // ✅ Works! (var is function-scoped)

/*          🎯 Summary Table

Keyword     Scope       Block Scoped ?        Function Scoped ?
  var     Function          ❌                      ✅
  let       Block           ✅                      ✅
 const      Block           ✅                      ✅


*/

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


//          HOISTING - declarations are moved to the top of their scope bef code runs


// variable hoisting with var



//variable hoisting with let and const



//function hoisting