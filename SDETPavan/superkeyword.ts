/*
        super() -- Used to invoke immediate parent class constructor
        super   -- used to invoke immeddiate parent class method
        super -- cannot be used to invoke parent class variable(property) but in java it is possible.

*/

class Parent{

    num: number = 10;

    constructor(){
        console.log("This is default contructor from parent class")
    }

    display(){
        console.log("This is display() method from parent class")
    }
}

class child extends Parent{
    num: number =20;

    constructor(){
        super();
        console.log("This child class constructor")
    }

    show(){
        // super.num; -- cannot be accessible. In JS/TS we cannot access parent class variable using super keyword
        console.log("This is from show() from child class")
    }

    display(){
          console.log("This is from display() from child class")
        super.display(); // We can invoke parent class method. 
    }
}

let c= new child();
console.log(c.num)
c.show()
c.display()