// Sometimes parameters which passed as an arguments to a fcuntion can be optional.

function getInformation(firstName:string , age?:number):string{ // for age added with "?" it means it is optional
    return firstName+ " "+age;
}

console.log(getInformation("Tom",20));
console.log(getInformation('Peter')); // age is optional


//default parameters: 
function setDetails(name:string, mesg:string ="welcome"):string{ //Here for mesg default value is "welcome"
    return mesg+" "+name;
}

console.log(setDetails("Rajashekar")) // It takes default of mesg as "welcome"
console.log(setDetails("Rajashekar","Hello")) // It takes "hello" as mesg arguments
console.log(setDetails("Rajashekar",undefined)) // It takes default of mesg as "welcome" instead of undefined
