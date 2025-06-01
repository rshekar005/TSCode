/*
    JS won't support methodoverloadin(function overloading)
    TS supports
    1. With same name
    2. but different paremeters with different return type
    3. However the number of parameters should be same
*/

// Provide the implementation of the function

function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a:boolean, b:boolean):boolean;

// need to implement only once. Here we cannot implement add() multiple times.
function add(a:any, b:any):any{
    return a+b;
}

console.log(add(10,20));
console.log(add("Rajashekar","Pillalamarri"))
console.log(add(true, false))