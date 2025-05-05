class Car{
    private model: string;
    year: number;
    constructor(model: string, year: number){
        this.model = model;
        this.year = year;
    } 
    getModel(): string{
        return this.model;
    }
    getYear(): number{
        return this.year;
    }
}

const vehicle = new Car("Toyota", 2020);
console.log(vehicle.getModel());


abstract class Animal{
    abstract makeSound(duration:number): void;
    move(duration:number): void{
        console.log("Moving along!...");
        this.makeSound(duration)
    }
}
class Dog extends Animal {
  makeSound(duration: number): void {
    console.log("Woof! Woof!");
  }
}
const dog = new Dog();
dog.makeSound(10);
dog.move(5);


// you use interface when you want to define a contract for classes to follow, while you use abstract classes when you want to provide a base implementation that can be shared among multiple classes.