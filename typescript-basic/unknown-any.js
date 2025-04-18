"use strict";
// Here we shall go through unkown and any types in TypeScript
let userAge;
userAge = 25;
// userAge = "25";
if (typeof userAge === 'number') {
    console.log(userAge + 1);
}
else {
    console.log('userAge is not a number');
}
// any type
let userName;
userName = "Allan";
console.log(userName);
userName = 25;
userName = true;
console.log(userName);
//casting
let userId;
userId = 25;
let useName = "John Doe";
let userDetails = userId + useName; // casting userId to string
console.log(userDetails); // 25John Doe 
function testing(input) {
    console.log("output : ", input);
}
testing("Hello");
testing(404);
testing(500);
function processFeedback(input) {
    if (typeof input === 'number') {
        console.log(`processing rating ${input}`);
    }
    else if (typeof input === 'string') {
        console.log(`processing text ${input}`);
    }
    else if (typeof input === 'boolean') {
        console.log(`processing boolean ${input}`);
    }
    else {
        console.log("Unsupported type");
    }
}
console.log("processFeedback");
processFeedback(23);
processFeedback("Hello world");
processFeedback([2, 3, 1]);
processFeedback(true);
// the difference between unknown and any is that unknown is a type-safe version of any that can be used to narrow the type of a variable at runtime.
