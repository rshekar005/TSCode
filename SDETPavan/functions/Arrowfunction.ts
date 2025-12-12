// Arrow function / lamda function

/*
 Lamda refers to an anonymous function that can be defined using the "arrow" syntax (=>) in TypeScript and JavaScript.
 Arrow functions provide a concise way to write functions and have lexical scoping of the "this" keyword.   

    3 parts in arrow function:
    1. Parameter list  -- A function can have zero or more parameters.
    2. Arrow (=>)  -- The fat arrow symbol separates the parameter list from the function body. Also called as "goes to" operator. After returning from the parameters, it goes to the function body.
    3. Function body  -- The function body contains the code that will be executed when the function is called.

    Syntax:
    let functionName = (parameters) => {
        // function body
    };

*/

// Example 1: Arrow function with no parameters and no return type

let show = ():void => {
    console.log("Hello from Arrow Function");
};

show();

// Example 2: Arrow function with parameters and return type

let add1 = (a:number, b:number):number =>{
    return a + b;
}

console.log("Sum using Arrow Function: "+add1(10, 20));

//Example 3: Arrow function with implicit return type
let multiply3 = (x:number, y:number):number => x * y;
let add2= (x:number, y:number):number => x + y;

console.log("Sum using Arrow Function with implicit return: "+add2(10, 15));
console.log("Multiplication using Arrow Function with implicit return: "+multiply3(5, 4));    

// Example 4: Arrow function with optional parameters . If first parameter is optional, then second parameter must be optional also.
let displayInfo = (name:string, age?:number):void => {
    console.log("Name: "+name);
    if(age !== undefined) {
        console.log("Age: "+age);
    }
}   

displayInfo("John");
displayInfo("Alice", 30);


// Example 5: Arrow function with default parameters
let greetUser = (name:string = "Guest"):void => {
    console.log("Hello, "+name);
};

greetUser();
greetUser("David"); 


// Example 6: Arrow function with rest parameters
let sumAll = (...numbers:number[]):number => {
    let sum:number = 0;     
    for(let num of numbers){
        sum += num;
    }
    return sum;
};

console.log("Sum of all numbers using Arrow Function with rest parameters: "+sumAll(1, 2, 3, 4, 5));
console.log("Sum of all numbers using Arrow Function with rest parameters: "+sumAll(10, 20, 30));   
// Example 7: Arrow function with multiple types using union types
let concatenate = (...items:(string|number)[]):string => {
    return items.join(", ");
};
console.log("Concatenated items: "+concatenate("Hello", 123, "World", 456));
