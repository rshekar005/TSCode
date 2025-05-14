let names:string[] =["naveen","ravi","rajashekar"];//string[] == holds string array values.
console.log(names[0]);

//using generics. Here we declared Arrays<string>. It means it stores array values.
let empNames:Array<string>=["naveen","ravi","rajashekar"]; // It holds string type of array
let empID:Array<number>=[1,2,3] // It hold only number array
let empinfo:Array<any>=["naveen",true,30]; // It holds any type af value in array

// mutile type array : In type script we can store any kind of value.
//In below example it holds only string and number values. It cannot hold boolean values

let values:(string|number)[]=["Ravi",123,"123"]
let val:Array<string|boolean>=["naveen",true];// It stores only string or boolean values 

//first array declaration and init:
let users: Array<string>;
users=["peter","naveen"]

let employees:Array<string>=["tom","naveen","ravi","rajashekar"];

//index based loop
for(let i=0;i<employees.length;i++){
    console.log(employees[i])
}
console.log("----------------------------")
//for loop
for(let e in employees){
    console.log(e +":" +employees[e])
}