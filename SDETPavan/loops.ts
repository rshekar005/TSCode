// Looping Statements: Repeat statements multiple times

// While Loop: It checks the condition before executing the loop body. It executes the loop body as long as the condition is true.

/*
while(condition){
    //loop body
    //increment/decrement
}
*/
let count:number=1;
while(count<=10){
    console.log("While Loop Count: "+count);
    count++;
}

// Example: Print even numbers from 1 to 20 using while loop
let num:number=2;
// while(num<=10){
//     console.log("Even Number: "+num);
//    num+=2;
// }

while(num<=10){
    if(num%2==0){
        console.log("Even Number using if: "+num);
    }
    num++;
}

let num2:number=1;
while(num2<=10){
    console.log("Odd numbers:"+num2);
    num2+=2;
}

// Print numbers in descending order from 10 to 1
let descNum:number=10;
while(descNum>=1){
    console.log("Descending Number: "+descNum);
    descNum--;
}


// Do while loop   : executes the loop body at least once before checking the condition

/*
do{
    //loop body
    //increment/decrement
}while(condition);
*/
console.log("****************** Do While Loop: ******************");
let count2:number=10;
do{
    console.log(count2);
    count2--;
}while(count2>=5)

    console.log("****************** Do While Loop Odd Numbers: ******************");
// Example: Print odd numbers from 1 to 20 using do while loop
let oddNum:number=1;
do{
    console.log("Odd Number: "+oddNum);
    oddNum+=2;
}while(oddNum<=20);

// For Loop: It consists of initialization, condition, and increment/decrement in a single line.

/* for(initialization; condition; increment/decrement){
    //loop body
} */

console.log("****************** For Loop: ******************");
// for(let i:number=1;i<=10;i++){
//     console.log("For Loop Count: "+i);
// }

let number;
for(number=1;number<=10;number++){
    console.log("For Loop Count: "+number);
};
console.log(number); //11


// break statement: used to exit from the loop prematurely
console.log("****************** Break Statement: ******************");
for(let i:number=1;i<=10;i++){
    if(i==6){
        break; //exit from the loop when i is 6
    }
    console.log("Break Loop Count: "+i);
}

// continue statement: used to skip the current iteration and move to the next iteration
console.log("****************** Continue Statement: ******************");
for(let i:number=1;i<=10;i++){
    if(!(i%2==0)){
        continue; //skip even numbers
    }
    console.log("Continue Loop Count: "+i);
}   


for(let i:number=1;i<=10;i++){
    if(i==6){
        continue; //skip when i is 6
    }
    console.log("Continue Loop Count (skip 6): "+i);
}

for(let i:number=1;i<=10;i++){
    if(i==5 || i==7){
        continue; //skip when i is 5 and 7
    }
    console.log("Continue Loop Count (skip 5 and 7): "+i);
}