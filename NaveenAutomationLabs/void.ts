// Function which cannot return anything.
// void variable cannot hold any data. It holds only undefined. To get understanding, change undefined with any valid value. It throws a compile time error

let number: void =undefined;

function getInfo_1(mesg: string):void{
    console.log(mesg)
}

getInfo_1("Hi TS"); // otp: Hi TS

