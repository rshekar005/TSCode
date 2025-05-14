// Typescript is statically types language
// Type inference
// Type annotations

let fName: string;  // This feature is called typed annatations
fName="Rajashekar";
// fName= 30;  --> statically typed language. Throws an error at compile time(CT)

let num: number; // Typed annotations
num=32;

let n:number=50;// Typed annotations
console.log(n)

// type of test is string. On basis value it will decide it is string. This feature is called type inference.
let test="typescript"; //  type string --> CT --> Typed inference
let billAmount=30 ; // type number --> CT --> Typed inference. Here it can be float, integer and double values

let isActive2: boolean= true;

//null and undefined
let city:null = null //Here type of city is null
let country:undefined=undefined // Here type os country is undefined

//Any -- It means it store any type of data
let value:any=10;//It is type annotation
value="Raja";
value=true;


//void: used for function which does not return any value
function printHello(){ // Here by defult return type is void. At compile it append void.
    console.log("Hello");
}


function getNumber():number{ //here the return type is number. It is type annotation
    return 123;
}

function getAnyValue():any{ //Her the return type is any. RT =any --CT --String.It is type annotation
    return "any";
}

function addition(a,b){
    return a+b; // At compile  time type inference concept will apply internally
}


addition(10,20);


// name : add
// parameters: a(number) , b(number)
// return type : number
function add(a:number,b:number):number{
    return a+b; // At compile  time return type is defined using type annottion
}


