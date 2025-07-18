//      LOOPS

// for

for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
}


//while

let j = 0;
while (j < 5) {
    console.log("While:", j);
    j++;
}



//do while

let k = 0;
do {
    console.log("Do While:", k);
    k++;
} while (k < 5);


// for ...of  --> to loop over arrays

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}



// for ....in ---> to loop over object properties

let person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key, ":", person[key]);
}