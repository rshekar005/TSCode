// step1: write a signature for overloaded function
// step2: write implementation for overloaded function. Implementation should be compatible with all signatures
// step 3: call the overloaded function

// Example 1: Different parameter types with same return type
// Step 1: Write signatures for overloaded function. It nothing but declaring a function without body
function getInfo(id: number): string; // signature 1
function getInfo(name: string): string; // signature 2


//step 2: Write implementation for overloaded function
function getInfo(param: number | string):string{
    if(typeof param==="number"){
        return `UserID : ${param}`;
    }else{
        return `Username : ${param}`;   
    }
}

// Step 3: Call the overloaded function
console.log(getInfo(101)); // calling signature 1
console.log(getInfo("Pavan")); // calling signature 2   

//Example 2: Different number of parameters 

function add(a: number, b: number): number; // signature 1
function add(a: number, b: number, c: number): number; // signature 2

// implementation
function add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    } else {
        return a + b;
    }
}

// calling overloaded function
console.log(add(10, 20)); // calling signature 1
console.log(add(10, 20, 30)); // calling signature 2


//Example 3: Different parameter types and different return types
function addOrConcat(a: number, b: number): number; // signature 1
function addOrConcat(a: string, b: string): string; // signature 2

// implementation
function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {       
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {       
        return a + b;
    }       
    throw new Error("Invalid arguments");
}

// calling overloaded function
console.log(addOrConcat(10, 20)); // calling signature 1
console.log(addOrConcat("Hello, ", "World!")); // calling signature 2
//console.log(addOrConcat(10, "20")); // Error: Invalid arguments


function processInput(input:number):number;
function processInput(input:string):string;

function processInput(input:number|string):number|string{
    if(typeof input==="number"){
        return input*2;
    }else{
        return input.toUpperCase();
    }
}

console.log(processInput(50)); // calling signature 1
console.log(processInput("hello")); // calling signature 2


function greet(input:number):string;
function greet(input:string):string;
function greet(isMarried:boolean):string;

function greet(input: number | string | boolean):string{
    if(typeof input==="number"){
        return `Hello User with ID: ${input}`;
    }else if(typeof input==="string"){
        return `Hello ${input}`;
    }else{
        return input ? "Hello Married User" : "Hello Single User";
    }
}

console.log(greet(123)); // calling signature 1
console.log(greet("Pavan")); // calling signature 2
console.log(greet(true)); // calling signature 3