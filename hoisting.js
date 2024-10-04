"use strict";

// the process in JavaScript where all "declarations" are placed in memory first

// 1. var / let / const hoisting
// 1.1. with var keyword
function example1() {
    // declaration hoisted 🅾️
    // initialized to undefined 🅾️
    // can access variable 🅾️
    return firstName;
    var firstName = "Irene";
}

// 1.2. with let keyword
function example2() {
    // declaration hoisted 🅾️
    // not initialized ❎
    // variable can't be accessed ❎
    return lastName; // TDZ
    let lastName;
}

// 1.3. with const keyword
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

// 2. function hoisting
// 2.1. function declarations
    // fully hoisted 🅾️
    example4(); // "hello, world!"
    function example4() {
        return "hello, world!";
    }

// 2.2. function expressions
    // not fully hoisted ❎
    // only variable declaration is hoisted 🅾️
    example5(); // TypeError: example5 is not a function
    var example5 = function() {
        return "hello, world!";
    }

    example6(); // ReferenceError: Cannot access 'example5' before initialization
    let example6 = function() {
        return "hello, world!";
    }

// questions 🙋🏻‍♀️
// what is TDZ?
    // TDZ stands for temporal dead zone and is the period where a variable is declared 
    // but not yet initialized and cannot be accessed
// only a variable with var keyword is hoisted
    // false - ReferenceError doesn't occur if a variable is not declared