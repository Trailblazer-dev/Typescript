// here we shall deal with the interface 

interface Person{
    name: string;
    age: number;
}

const person: Person = {
    name: "John",
    age: 30
}


interface employee extends Person{
    salary: number;
}
const employee: employee = {
    name: "John",
    age: 30,
    salary: 1000
}
const employee2: employee = {
    name: "John",
    age: 30,
    salary: 1000
}

console.log(employee);