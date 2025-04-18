"use strict";
const x = 4;
console.log("x is :", x);
console.log("This is x + 1 ", x + 1);
function test(n) {
    return n + x;
}
console.log("calling test function", test(2));
