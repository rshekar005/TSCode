// Anonymous function expression : A function expression that does not have a name. Instead, it is assigned to a variable which can be used to invoke the function.
/*
    syntax:
    let variableName = function(parameters){
        // function body
    };
*/

// Example 1: Anonymous function with no parameters and no return type

let greet2 = function():void{
    console.log("Hello from Anonymous Function Expression");
};


let msg= function():string{
    return "Welcome to TypeScript Anonymous Functions";
}
console.log(msg());
greet2();


// Example 2: Anonymous function with parameters and return type

let multiply1 = function(a:number, b:number):number{
    return a * b;
};
console.log(multiply1(5, 10));
