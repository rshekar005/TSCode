// Typeassertion in type script is a way to tell the typescript compiler you know more about type of value it does.

//1. using <>
let totalBill:any=123.1;
let finalBill=<number>totalBill+200; // Here we are converting this to be a number instead of typescript compiler. It is similar to typecasting in java
console.log(finalBill)

//2. using "as" keyword
let someValue:any="Hello typescript with Naveen automation labs";
let len= (someValue as string).length;
console.log(len)

let flag:any =true;
if(flag as boolean){
    console.log("Hello TS!!!")
}