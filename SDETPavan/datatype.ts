// Typesript is statically programming language
// Javascript is dynamically programming language. It means we can change the datatype of variable at runtime 
// In Typescript, once we declare a variable with a datatype, it cannot be changed later
let data=10;
 //data="Raja"; //It throws an error as data holds only number. So we call it has statically programming language

console.log(data)

let num1:string="2";
let num2:number=5;

let result=num1+num2;
console.log(result)

let num3=10;

//Number Type   -- Represents both integer and floating point numbers
let n1:number=10; //integer
let n2:number=12.34; //floating point number
let big=9007199254740991n; //bigint type
export const age:number=31;
console.log("Integer is: "+n1);
console.log("Floating number is: "+n2);
console.log("Bigint is: "+big);
console.log("Age is: "+age);


//String Type
let str1:string="Hello"; // double quotes
let str2:string='Welcome to TypeScript'; // single quotes
let firstName :string="Rajashekar";
let str3:string=`Hello ${firstName}`; // backtick


console.log("String 1: "+str1);
console.log("String 2: "+str2);
console.log("String 3: "+str3);

//Boolean Type
let isDone:boolean=true;
console.log("Boolean value is: "+isDone);
isDone=false;
console.log("Boolean value is: "+isDone);
//Boolean from expression
let isGreater:boolean=(10>5);
console.log("Is 10 greater than 5? "+isGreater);
//Boolean from function
function isEven(num:number):boolean{
    return num%2==0;
}   
console.log("Is 4 even number? "+isEven(4));
console.log("Is 7 even number? "+isEven(7));    

//null and Undefined Types -- Special types for absence of value. Normally used to indicate uninitialized variables or missing values.
let u:undefined=undefined;
let n:null=null;
console.log("Undefined value: "+u);
console.log("Null value: "+n);

// // let price:number;
// // console.log("Price before initialization: "+price); //undefined -- Throws compile time error if strictNullChecks is enabled
// price=100;
// console.log("Price after initialization: "+price); //100


//Any Type -- It can hold any type of value. It is used when we don't know the type of value at compile time or when we want to opt-out of type checking for a particular variable.
let randomValue:any=10;
console.log("Random Value: "+randomValue);
console.log("Type of Random Value: "+typeof randomValue);
randomValue="Hello";
console.log("Random Value: "+randomValue);
console.log("Type of Random Value: "+typeof randomValue);
randomValue=true;
console.log("Random Value: "+randomValue);
console.log("Type of Random Value: "+typeof randomValue);


//union Type -- It can hold multiple types of values. It is used when a variable can have more than one type of value.
let multiType: number | string ;
multiType=20;
console.log("Multi Type value: "+multiType);
multiType="Twenty";
console.log("Multi Type value: "+multiType);
//multiType= true; //Error: Type 'boolean' is not assignable to type 'string | number'


//void Type -- It represents the absence of any type. It is used as the return type of functions that do not return a value.
function displayMessage():void{
    console.log("This is a void function");
}
displayMessage();
//let v:void=undefined; // valid
//let v1:void=null; // valid    
//let v2:void=10; //Error: Type 'number' is not assignable to type 'void'
//let v3:void="Hello"; //Error: Type 'string' is not assignable to type 'void'
//let v4:void=true; //Error: Type 'boolean' is not assignable to type 'void'


function show():void{
    console.log("Hello"); // valid
}
show();

function sum(a:number,b:number):number{
    return a+b;
}

let s:number=sum(10,20);
console.log("Sum is: "+s);