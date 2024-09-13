"use strict";

const person = { // object
    firstName: "Irene", // property 1️⃣ 
    lastName: "Kwon", // property 2️⃣
    age: 20, // property 3️⃣
    fullName: function() { // method
        return this.firstName + ", " + this.lastName;
    }
}

console.log(person.firstName); // Irene
console.log(person.lastName); // Kwon
console.log(person.age); // 20
console.log(person.fullName()); // Irene, Kwon

// questions 🙋🏻‍♀️
// what does the this keyword refer to inside the fullName method?
    // this keyword refers to the current instance of the person object
// if we move the fullName method outside the person object,  
// what changes would be needed to keep it working?
    // need to pass the person object explicitly to access its properties
    // e.g., function fullName(person) { return person.firstName + ", " + person.lastName; }
// what happens when trying to access a property that does not exist in the person object?
    // will return undefined