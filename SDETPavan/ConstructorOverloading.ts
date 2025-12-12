class Calculator{

    //Constructor Overloading
    constructor();
    constructor(a:number,b:number);

    constructor(a?:number, b?:number){
        if(a!=undefined && b!=undefined){
            console.log(a+b)
        }else{
            console.log("default contructor called")
        }
    }

    //Method overloading
    add1(a:number, b:number):number;
    add1(a:number, b:number, c:number):number;

    add1(a:number,b:number, c?:number){
        if(c!=undefined){
            return a+b+c;
        }else{
            return a+b;
        }
    }
}

//Constructor overloading
let cal1=new Calculator();
let cal2= new Calculator(2,5);

console.log(cal1.add1(3,10));
console.log(cal1.add1(1,2,3));

