// we shall go through primitive types in typescript
// string
// number
// boolean
// null
// undefined
// symbol
// bigint
let m:number = Infinity;
console.log(m);

let k :number = -12;
console.log(k);

//string

let personName: string = "Allan";
console.log(personName);

let penColor :string;

penColor = "I have a blue pen";
console.log(penColor);

penColor= `I have ${personName}'s pen`;
console.log(penColor);


//boolean
console.log("boolean types");
let isSwitchOn : boolean;

isSwitchOn = false;
console.log("The switch is :",isSwitchOn ,"but now it is ",!isSwitchOn);


// null and undefined
console.log("null and undefined types");
let nullValue : null = null;
console.log(nullValue);
let undefinedValue : undefined = undefined;
console.log(undefinedValue);
// nullValue =1;  //will give error because null is not assignable to type number
// undefinedValue = 2; // will give error because undefined is not assignable to type number


/*
we use null when we don't want to assign any value to a variable
we use undefined when we want to assign a variable but we don't know the value yet
*/


let age :number|undefined = undefined; // this is a union type
console.log(age);
age = 12;
console.log(age);