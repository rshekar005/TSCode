//Any --> It means it can hold any value (string, number or boolean)
let number_1:any=12.24 // Here number_1 can hold any type of data

let something:any;
something="Rajashekar";
something=true
something=1
something=1.32

// any can applicable to array as well

let number_2:any[]=["Rajashekar",1,true,100];
number_2.push("Pillalamarri");
console.log(number_2)

// any can applicable to function as well. Here return type is any

function getInfo(a: number, b: number):any{
    if(a>b){
        return "testing";
    }else{
        return 123;
    }
}

let result=getInfo(10,20);//otp=123
console.log(result)