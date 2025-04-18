// we shall go through literals and enums in this file
// a literal is a value that is not a variable
// an enum is a set of named constants


//literals

let direction: "north" |"south"| "east" | "west";// this is an example of a literal type

let responseCOde: 200 | 404 | 500; // this is an example of a literal type


enum Size {
    Smallest,
    Medium,
    Large
}

console.log(Size.Medium)

console.log("size large ",Size.Large)

console.log("size Smallest ",Size.Smallest)


enum Shoes{
    Sports = "Nike", 
    Casual = "Vans",
    Formal = "Clarks",
}

console.log("shoes ",Shoes.Sports)

enum Colors{
    Red = "red",
    Green = "green",
    Blue = "blue",
}
console.log("colors ",Colors.Red)

let car: Colors = Colors.Red; // Assigning a value from the Colors enum
console.log(typeof car);