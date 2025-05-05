// here we shall learn about static 

class Cat{
    name:string;
    static instanceCount:number=0;
    constructor(name:string){
        Cat.instanceCount++;
        this.name = name;
    }
}
// static variables are shared across all instances of a class, and they are accessed using the class name rather than an instance of the class.
// static methods are called on the class itself, not on instances of the class and can only access static properties and methods.

const cat1 = new Cat('tom');
console.log(Cat.instanceCount);
const cat2 = new Cat("jerry");
console.log(Cat.instanceCount);