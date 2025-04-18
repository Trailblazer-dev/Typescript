// Here we shall go through optional chaining and bang


const people =[{name:"tin"},{name:"joe"},{name:"jane"}];


const el = people.pop()?.name;
console.log(el)
// the ?. operator is called optional chaining operator
// it is used to access properties of an object that may be null or undefined

const pple = [[{name:"tin"}]];
const el2 = pple.pop()!.pop()!.name;

console.log(el2)
// the ! operator is called non-null assertion operator
// it is used to assert that an expression is non-null and non-undefined


/* The difference between the the ? and ! is that the ? operator will return undefined if the property is null or undefined, while the ! operator will throw an error if the property is null or undefined. 

*/