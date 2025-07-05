// It never return any thing.

let nothing:never; // Here we cannot assign any value

function printError(mesg: string):never{
   throw new Error(mesg);
}

//printError("some error")

function displayMessage():never{
    while(true){
        console.log("Welcome to Taj hotel")
    }
}

displayMessage(); // otp: infinte loop with "Welcome to Taj hotel"