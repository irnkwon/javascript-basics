"use strict";

// 1️⃣ for (ES1)
    // general iteration with a counter
    // provides maximum control over the loop
    // no return value ❎
    // supports break or continue 🅾️
function example1() {
    for (let i=1; i<=5; i++) {
        console.log(i);
    }
}

// 2️⃣ for...in (ES1)
    // iterates over enumerable properties of an object
    // not recommended for arrays, as it iterates over indices as strings
    // no return value ❎
    // supports break or continue 🅾️
function example2() {
    const array = [10, 20, 30, 40, 50];

    for (const index in array) {
        console.log(index, array[index]);
    }
}

// 3️⃣ for...of (ES6)
    // iterates over values of iterable objects
        // e.g. arrays, strings, maps, sets
    // no return value ❎
    // supports break or continue 🅾️
function example3() {
    const array = [10, 20, 30, 40, 50];

    for (const value of array) {
        console.log(value);
    }
}

// 4️⃣ forEach() (ES5)
    // applies a function to each element of an array
    // cannot be used with objects
    // no return value ❎
    // does not support break or continue ❎
function example4() {
    const fruits = ['🍎', '🍌', '🍊', '🥭', '🍓'];

    fruits.forEach((elem, index) => {
        console.log(`${index}: ${elem}`);
    });
}

// 5️⃣ map() (ES5)
    // transforms elements of an array and returns a new array
    // does not modify the original array
    // return value 🅾️
    // does not support break or continue ❎
function example5() {
    const array = [1, 2, 3, 4, 5];

    const squaredArray = array.map(function(value) {
        return value * value;
    });
    console.log(squaredArray);
}

// examples 💻
example1(); // 1, 2, 3, 4, 5
example2(); // 0 10, 1 20, 2 30, 3 40, 4 50
example3(); // 10, 20, 30, 40, 50
example4(); // 0: 🍎, 1: 🍌, 2: 🍊, 3: 🥭, 4: 🍓
example5(); // [1, 4, 9, 16, 25]