// Arrow function => fat arrow or lambda function

// Anonymous function : with out name and arguments
let inform =() => {
    console.log("Hi");
}

inform();

let pr= () => console.log("Hello")

pr();

// With arguments
let add1 =(x:number,y:number):number =>{
    return x+y;
}
console.log(add1(1,2))

// Here we haven't used return keyword so curly braces {} not needed. If return is written then curly braces are needed.
let sum1 =(x:number,y:number) :number => x+y;
console.log(sum1(10,20))


// Object
class person{
    firstName:string;
    age:number;

    constructor(firstName:string, age:number){
        this.firstName=firstName;
        this.age=age;
    }

    display =() => {
        console.log(this.firstName + " "+this.age)
    }

}


let p1 = new person("Raja",30);
p1.display();
