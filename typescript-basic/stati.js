"use strict";
// here we shall learn about static 
class Cat {
    constructor(name) {
        Cat.instanceCount++;
        this.name = name;
    }
}
Cat.instanceCount = 0;
const cat1 = new Cat('tom');
console.log(Cat.instanceCount);
const cat2 = new Cat("jerry");
console.log(Cat.instanceCount);
