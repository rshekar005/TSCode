/*
    1. An interface in typescript is a way to define the structe of an object
    2. It tells the compiler what properties and types an object should have
    3. It's like a blue print for objects
    4. Abstract method: We have only signature of the method {there is no implementation}

    syntax:
    interface InterfaceName{
    properties
    abstract method
    }

*/

// Example 1: Basic interface

interface Person{
    name:string;
    age:number;
}

let student:Person={
    name:"john",
    age:30
}

console.log(student.name)
console.log(student)


// Example 2: optional properties (?)

interface Employee{
    eid:number;
    name:string;
    department?:string;
}

let emp: Employee={
    eid:201,
    name:"Sagar"
}

let emp1: Employee={
    eid:204,
    name:"Smith",
    department:"Engineer"
}

console.log(emp.eid, emp.name , emp.department)
console.log(emp1.eid, emp1.name , emp1.department)


// Example 3: readonly properties (readonly to prevent modification) & Function type

interface Book{
    title:string;
    readonly isbn:string;

    display():void; // abstract method
}

let book1:Book={
    title:"Learn Playwright",
    isbn:"123-ABC",

    display(){
            console.log(book1.isbn, book1.title)
    }
}

console.log(book1.title)
console.log(book1.isbn);  // Assigned value
book1.display();

console.log("After changing the values");

book1.title="Learn Typescript"
console.log("After changing the title:", book1.title)

// book1.isbn="123-xyz";  Cannot assign to 'isbn' because it is a read-only property


//Example:4 Extending Interfaces

// Parent interface
// interface Animal{
//     name:string
// }

// // child interface
// interface Dog extends Animal{
//     color:string;
// }

// let mydog:Dog={
//     name:"Buddy",
//     color:"Black"
// }

// console.log( mydog.name, mydog.color)


// Example 5: class implements interface

interface Animal{
    name:string;
    sound():void;
}

class Dog implements Animal{  
    name:string;
    color:string;
    constructor(name:string,color:string){
        this.name=name;
        this.color=color;
    }
    sound(): void {
        console.log("Dog barking...")
    }
}

let dog=new Dog("Tommy","black")
console.log(dog.name)
console.log(dog.color)
dog.sound();