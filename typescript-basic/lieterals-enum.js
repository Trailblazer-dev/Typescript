"use strict";
// we shall go through literals and enums in this file
// a literal is a value that is not a variable
// an enum is a set of named constants
//literals
let direction; // this is an example of a literal type
let responseCOde; // this is an example of a literal type
var Size;
(function (Size) {
    Size[Size["Smallest"] = 0] = "Smallest";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size.Medium);
console.log("size large ", Size.Large);
console.log("size Smallest ", Size.Smallest);
var Shoes;
(function (Shoes) {
    Shoes["Sports"] = "Nike";
    Shoes["Casual"] = "Vans";
    Shoes["Formal"] = "Clarks";
})(Shoes || (Shoes = {}));
console.log("shoes ", Shoes.Sports);
var Colors;
(function (Colors) {
    Colors["Red"] = "red";
    Colors["Green"] = "green";
    Colors["Blue"] = "blue";
})(Colors || (Colors = {}));
console.log("colors ", Colors.Red);
let car = Colors.Red; // Assigning a value from the Colors enum
console.log(typeof car);
