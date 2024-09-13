"use strict";

// 1️⃣ NaN - global property

// 2️⃣ isNaN - global method
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description
// converts the value to a number and checks if the result is NaN (not recommended)
// problem: isNaN("37") -> isNaN(Number("37")) -> isNaN(NaN) -> true
    // can't check NaN properly ❎
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN(true); // false
isNaN(null); // false
isNaN(37); // false
isNaN("37"); // false: converted to the number 37 which is not NaN
isNaN("37.37"); // false: converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true: Number("123ABC") is NaN
isNaN(""); // false: converted to 0 which is not NaN
isNaN(" "); // false: converted to 0 which is not NaN
isNaN(new Date()); // false: Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true: the string representation of a Date object cannot be parsed as a number
isNaN([]); // false: the primitive representation is "", which coverts to the number 0
isNaN([1]); // false: the primitive representation is "1"
isNaN([1, 2]); // true: the primitive representation is "1,2", which cannot be parsed as number

// 3️⃣ Number.isNaN - static method of Number object
// checks if the given value is a number with value NaN
    // can check NaN properly 🅾️
Number.isNaN(NaN); // true
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN(true); // false
Number.isNaN(null); // false
Number.isNaN(37); // false
Number.isNaN("37"); // false
Number.isNaN("37.37"); // false
Number.isNaN("37,5"); // false
Number.isNaN("123ABC"); // false
Number.isNaN(""); // false
Number.isNaN(" "); // false
Number.isNaN(new Date()); // false
Number.isNaN(new Date().toString()); // false
Number.isNaN([]); // false
Number.isNaN([1]); // false
Number.isNaN([1, 2]); // false

// clarification 💡
    // both isNaN() and Number.isNaN() checkes if the given value is NaN 🅾️
    // both isNaN() and Number.isNaN() checks if the given value is not a number ❎
        // e.g. string, special characters, space, etc.

// questions 🙋🏻‍♀️
// what does NaN === NaN return?
    // FALSE - NaN is not equal to is considered unequal to anything, including itself
// what does console.log(typeof NaN) return?
    // number - NaN is number type in JavaScript