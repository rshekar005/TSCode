// Named function expression : A function expression that has a name.

/*
    syntax:
    let variableName = function functionName(parameters){
        // function body
    };
*/

// Example 1: Named function with no parameters and no return type

function display():void{
    console.log("Hello from Named Function Expression");
}

display();

// Example 2: Named function with parameters and return type
function addNumbers(a:number, b:number):number{
 return a + b;
}   

console.log(addNumbers(5, 10));


//Named parameter with rest parameters --> Rest parameters allow a function to accept an indefinite number of arguments as an array.
function add(... nums:number[]){
    let sum:number=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }   
    console.log("Sum of numbers inside function: "+sum);
}

add(1,2,3);
add(10,20,30,40,50);


// Named function with rest arguments -- mutliple types --> A function can accept multiple types of arguments using union types along with rest parameters.

function findElemenets(... elements:(number|string)[]):number{
    return elements.length;
}

console.log(findElemenets(1,2,3,4,5,"info","test"));
console.log(findElemenets("a","b","c"));
console.log(findElemenets(100,200,300 ));

// Named function with optional parameters --> Optional parameters are parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name in the function definition.

function displayDetails(name:string, id:number, age?:number):void{
    console.log("Name: "+name);
    console.log("ID: "+id); 
    if(age!==undefined){
        console.log("Age: "+age); 
    }
}

displayDetails("Pavan", 101);
displayDetails("Pavan", 101, 25);

// Named function with default parameters --> Default parameters allow named functions to have default values for parameters if no value or undefined is passed.
function multiply(a:number, b:number=2):number{
    return a * b;
}

console.log(multiply(5)); // Uses default value of b
console.log(multiply(5, 3)); // Overrides default value of b

function calculator(price:number, rate:number=0.08):void{
    let discount=price * rate;
    console.log("Discount: "+discount);
}

calculator(1000); // Uses default rate
calculator(1000, 0.1); // Overrides default rate