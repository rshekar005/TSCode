//Arrays are dynamic in nature in typescript. At runtime we add/remove elements 
// Tuples are always fixed in nature and order matters

let person:[string,number]=["Naveen", 123] // Here it means we can add 2 elements one is string and another is number

let user:[string,number,boolean]=["Naveen", 123, true]
console.log(person[0])  // Naveen
console.log(person[1])  // 123

console.log(user[0])    // Naveen
console.log(user[1])    // 123
console.log(user[2])    // true


let data:[string, number][]=[["Naveen", 100],["raja", 101]]
console.log(data[0][0])  // Naveen

let customer:[string, number]=["Naveen", 100]; // In tuple while declaring if no array is added then only one element can be inserted
customer.push("Ravi", 1); // But we add more elements in tuple like this
console.log(customer)

//Tuple with optional elements
let data1:[string,number?];
data1=["info"];// Here number is optional
console.log(data1)
data1=["info", 123]
console.log(data1)


//Tuple with rest elements
let logs: [string, ...number[]];
logs = ["Start", 1, 2, 3]; 
console.log(logs)