// ======= forEach(), filter(), map(), reduce(), some() , every() methods in TypeScript =======

// forEach(): Executes a provided function once for each array element. 
//syntax : array.forEach(function(currentValue, index, array){})
// It doesnot return any array
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array the current element belongs to.

// Ex:1 Get index of all fruits along with value

let fruits2: string[] = ['Apple', 'Banana', 'Cherry', 'Date'];

console.log("Printing fruits along with index using for loop...");

for(let f in fruits2){
    console.log(`Index: ${f}, Fruit: ${fruits2[f]}`);
}

console.log("Printing fruits along with index using forEach method...");

fruits2.forEach(function(element, index){
 console.log(`${index}: ${element}`);   
}
)

//using arrow function
fruits2.forEach((element, index) => {
    console.log(`${index}: ${element}`);
});

// Ex:2 convert each element into uppercase using forEach

fruits2.forEach((element) => {
console.log(element.toUpperCase());
})


/* map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
It takes each element of the array, applies the provided function to it, and returns a new array containing the results.
Returns same number of elements as the original array.
 syntax : array.map(function(currentValue, index, array){})

 */

 // Ex1: Get square of all the numbers in an array. Ex:[1,2,3,4] => [1,4,9,16]

 let num5:number[]=[1,2,3,4,5];

 let squares=num5.map(function(element){
    return element * element;
 });

 console.log("Squares using map and normal function: ", squares); // Output: [1,4,9,16,25]

 //using arrow function

 let square2=num5.map(e=>{
    return e*e;
 });

 console.log("Squares using map and arrow function: ", square2); // Output: [1,4,9,16,25]


 // Ex2: Double the number

 let doubleNumber=num5.map(d=>d+d); // shorthand arrow function. If you have single return statement, you can omit the curly braces and the return keyword. 

 console.log("Doubled numbers using map: ", doubleNumber); // Output: [2,4,6,8,10]
 //Ex3: Convert all names to uppercase using map

 let names2:string[]=['Pavan','Kalyan','Ravi']; 

 let upperName=names2.map(name=>{
    return name.toUpperCase();
 })

 console.log("Uppercase names using map: ", upperName); // Output: [ 'PAVAN', 'KALYAN', 'RAVI' ]

/*
    filter(): creates a new array with all the elements that pass/satisfy the condition implemented by the provided function.
    syntax : array.filter(function(currentValue, index, array){})
    Returns either same or less number of elements than the original array based on the condition.
    It checks for true/false condition for each element and includes only those elements that return true in the new array.
*/

// Ex1: Get all even numbers from an array

let numbers2:number[]=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=numbers2.filter(num=>num%2===0); // [2,4,6,8,10]
console.log("Even numbers using filter: ", evenNumbers); // Output: [2,4,6,8,10]

// Ex2: Get names with length greater than 4
let name_s:string[]=['Pavan','Kalyan','Ravi','Srinivas','Chandu','Ajay'];

let n=name_s.filter(n=> n.length >4);
console.log("Names with length greater than 4 using filter: ", n); // Output: [ 'Kalyan', 'Srinivas', 'Chandu' ]


/* Reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
syntax : array.reduce(function(accumulator, currentValue, index, array){}, initialValue)

accumulator: It accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback—or initialValue, if supplied.
*/

// Ex1: Get the sum of all numbers in an array

let numbers3:number[]=[1,2,3,4,5];

let sum=numbers3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},1); // 0 is the initial default value for accumulator. If won't specify, first element will be taken as initial value. 

console.log("Sum of all numbers using reduce: ", sum); // Output: 15

console.log(numbers3.reduce((accumulator, currentValue) =>  accumulator + currentValue, 10)); // initial value is 10 . Output: 25


/*
    some(): tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
    syntax : array.some(function(currentValue, index, array){})

*/

let numbers4:number[]=[1,3,5,7,8];

let hasEven=numbers4.some(num=> num%2===0);
console.log("Array has even number using some(): ", hasEven); // Output: true

/*
    every(): tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    syntax : array.every(function(currentValue, index, array){})
*/

let allEven=numbers4.every(num=> num%2===0);
console.log("All elements are even using every(): ", allEven); // Output: false 