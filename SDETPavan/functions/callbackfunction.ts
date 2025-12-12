// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// Callback functions are commonly used in asynchronous programming, event handling, and functional programming paradigms.


// Example:1
// Function that takes a callback function as an argument. Here callback name can be anything.Instead smg we can define it as cb or callback
function greet(name:string, smg:(message:string)=>void){
    console.log("Hello, "+name);
    smg("Welcome to TypeScript Callback Functions!");
}

//callback function
function showMessage(message:string):void{
    console.log("Message: "+message);
}

// Invoking the greet function with showMessage as a callback
greet("Alice", showMessage);


//Example :2
function sums(a:number, b:number, cb:(result:number)=>void):void {
   let sum=a+b;
    cb(sum); // Invoking the callback function with the result
}

//callback function
function displayResult(result:number): void {
   console.log('The result is: ' + result);
}

sums(5, 10, displayResult);