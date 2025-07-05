/*
 Enum: Enumeration : data types : holds set of constant values
 Types of enums:
    1. numbers
    2. string
    3. Heterogenous
*/

//numeric
enum Browser{
    Chrome=getVersion("chrome"), // deafult is :0 . Here it changed to 115.
    Firefox=9, //  default is :1 . Here it changed to 9    
    Safari,  // default is 2 Now safari is 9+1
    Edge //3 default is Now edge is 10+1
}

function getVersion(browserName: string):number{
    if(browserName==="chrome"){
        return 115;
    }
    return -1;
}

console.log(Browser.Chrome) // opt: 115
console.log(Browser.Safari) // opt: 10
console.log(Browser[115])  // opt: Chrome




//String enums
enum environment{
    DEV="dev",
    QA="qa",
    STAGING="staging",
    PROD="prod"
}

console.log(environment.DEV)
console.log(environment['STAGING'])


// Heterogenous
enum Status{
    ACTIVE="active",
    DEACTIVE=1,
    PENDING
}

console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);
