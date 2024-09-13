"use strict";

// hoisting is the process in JavaScript where all variable and constant "declarations" 
// are placed in memory first

function example1() {
    // declaration hoisted 🅾️
    // initialized to undefined 🅾️
    // can access variable 🅾️
    return firstName;
    var firstName = "Irene";
}

function example2() {
    // declaration hoisted 🅾️
    // not initialized ❎
    // variable can't be accessed ❎
    return lastName; // TDZ
    let lastName;
}

function example3() {
    // declaration hoisted 🅾️
    // not initialized ❎
    // constant can't be accessed ❎
    return NUM_OF_WEEKS; // TDZ
    const NUM_OF_WEEKS = 7; // must be initialized
}

example1(); // undefined
example2(); // ReferenceError: Cannot access 'lastName' before initialization
example3(); // ReferenceError: Cannot access 'NUM_OF_WEEKS' before initialization

// questions 🙋🏻‍♀️
// what is TDZ?
    // TDZ stands for temporal dead zone and is the period where a variable is declared 
    // but not yet initialized and cannot be accessed
// only a variable with var keyword is hoisted
    // false - ReferenceError doesn't occur if a variable is not declared