"use strict";
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
}
const vehicle = new Car("Toyota", 2020);
console.log(vehicle.getModel());
class Animal {
    move(duration) {
        console.log("Moving along!...");
        this.makeSound(duration);
    }
}
class Dog extends Animal {
    makeSound(duration) {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog();
dog.makeSound(10);
dog.move(5);
// you use interface when you want to define a contract for classes to follow, while you use abstract classes when you want to provide a base implementation that can be shared among multiple classes.
