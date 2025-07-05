// for loops

for(let i=0;i<=10;i++){
    console.log(i);
    break;
}

for(let j=0;j<=10;j=j+2){
    console.log(j);
}

// for..of loop -- Used mainly for arrays. ****Here of is used to print the values****
let numbers:number[]=[100,200,300,400]
for(let n of numbers){
    if(n===200){
        console.log("Hi");
        break;
    }
  
}
console.log("======================================")
// for..in loop -- Used mainly for arrays. ****Here in is used to print the index****
let numbers_1:number[]=[100,200,300,400]
for(let n in numbers_1){
   console.log(n + ":" +numbers_1[n])// n prints the index.. 0 1 2 3  numbers_1 prints 100 200 300 400
}

console.log("======================================")
let infor= "Hello world";
for(let s of infor){
    console.log(s)
}
console.log("======================================")
// while loop
let p=1
while(p<=10){
    console.log(p)
    p++;
}

// use cases of while loop: whne number of iterations are not fixed
// 1. Infinte scrolling : zomato, swiggy
// 2. Page loading
// 3. Wait for page elements
// 4. calendar handling
// 5. webtable pagination


/*
    Use case for for loop:Number of iterations are fixed
    1. drop down month
*/
console.log("==========================")
// do while loop : First it will enter into do loop then it checks for a condition. Executing logic atleast once
let d:number=1;
do{
    console.log(d);
    d++;
}  while(d>=10);