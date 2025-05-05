"use strict";
// here we shall deal with advanced functions in TypeScript.
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log("rest paramter function  ");
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
console.log(sum(4, 5));
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
console.log("function overloading");
console.log(add(1, 2)); // 3
console.log(add("Hello, ", "World!")); // "Hello, World!"
