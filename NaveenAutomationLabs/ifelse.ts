// syntax side it is same as javascript. Here in if condition we cannot use break statement. It can be used only for loops
let flag_2:boolean= true;
if(flag_2){
    console.log("pass")
}else{
    console.log("fail")
}

let x:number=10, y=20;// here with single let we can define 2 variables

if(x>y){
    console.log(" x is greater than y")
}else{
    console.log(" y is greater than x")
}

// if else if
let a:number =600
let b:number=200
let c:number= 300

if(a>b && a>c){
    console.log("A is greatest")
}else if(b>c){
    console.log("B i greatest")
}else{
    console.log("C is greatest")
}

// Ternary operator
let i:number = 30
let j:number =20
i > j ? console.log(" i is greatest ") : console.log(" j is greatest ")


let browser: string = "edge";
(browser === "chrome" )? console.log(" launch chrome")  : browser === "firefox" ? console.log(" launch firefox") : console.log("Please pass valid browser")