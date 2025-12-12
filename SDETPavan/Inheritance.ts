/*
    inheritance: A class can reuse the properties and methods of another class.
    It is a mechanism where child can inherit the properties and method of parent class
    it allows to reuse the functionality of an existing code without rewriting it

    A -- properties + methods (Base class / Super class /Parent class)
    B -- extends A -- (child class / derived class /sub class)

*/

class Car{
    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){
        this.name=name;
        this.color=color;
        this.model=model
    }

    start(){
        console.log('car started..')
    }
    stop(){
        console.log("car stopped..")
    }
    displayInfo(){
        console.log(`Name : ${this.name} , color: ${this.color} , model: ${this.model}`)
    }
}

class Honda extends Car{
    year:number;
    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model) // It calls parent class constructor
        this.year=year;
    }

    start(){    // Method overriding
        console.log("Honda started..")
    }

    yom(){
        console.log(`Name : ${this.name} , color: ${this.color} , model: ${this.model} ,Year of maunfactoring: ${this.year}`)
    }
}

let h1= new Honda("Honda","Red","Honda city",2023)
console.log(h1.name)
h1.start();
h1.yom();
h1.stop();
h1.displayInfo(); 

// Parent class variable is holding child class
let car:Car= new Honda("Honda","Red","Honda city",2023)
car.displayInfo()
car.start();
//  car.yom();   Not accessible