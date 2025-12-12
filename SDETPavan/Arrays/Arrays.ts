/*
    Arrays in Typescript:
    -----------------------
    - An arrays is a special type of data structure that can hold multiple values of the same type.
    - In Typescript, arrays can be defined using two syntaxes: 
      1. Using square brackets [] 
      2. Using the Array<T> generic type.
    - Arrays can hold elements of any type, including primitive types (number, string, boolean) and custom types (objects, interfaces).
    - Typescript provides various methods to manipulate arrays, such as push, pop, shift, unshift, splice, slice, and more.
    - You can also use loops (for, for...of, forEach) to iterate over array elements.
    - Arrays are on ordered collections, meaning the order of elements is maintained.
    - Indexes in arrays start from 0.
    - Dynamic resizing: Arrays can grow or shrink in size as elements are added or removed.But in java arrays are fixed in size.
*/

// Approach 1: using literal syntax

let names:string[]=[]; // Declaring an empty array of strings

// Adding elements to the array using index
names[0]="Pavan";
names[1]="Kalyan";
names[2]="Ravi";


let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['Apple', 'Banana', 'Cherry'];
let mixedArray: (number | string)[] = [1, 'Two', 3, 'Four'];

console.log(names);        // Output: [ 'Pavan', 'Kalyan', 'Ravi' ]
console.log(numbers);    // Output: [1, 2, 3, 4, 5]
console.log(fruits);    // Output: ['Apple', 'Banana', 'Cherry']
console.log(mixedArray); // Output: [1, 'Two', 3, 'Four']


console.log(names[0]); // Output: Pavan
console.log(numbers[2]); // Output: 3
console.log(fruits[1]); // Output: Banana
console.log(mixedArray[3]); // Output: Four

console.log(names[3]); // Output: undefined (index out of bounds)

console.log("names lenght: ", names.length); // Output: names length:  3
console.log("numbers length: ", numbers.length); // Output: numbers length:  5




// Approach 2: using Array<T> generic type

let emplName: Array<string> = ['John', 'Jane', 'Doe'];
let ageArray: Array<number> = [25, 30, 35];
let data3: Array<string | number> = ['Alice', 28, 'Bob', 32];
let booleanArray: Array<boolean> = [true, false, true];
let objectArray: Array<{ name: string; age: number }> = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
console.log(emplName); // Output: [ 'John', 'Jane', 'Doe' ]
console.log(emplName[1]); // Output: Jane
console.log(data3.length); // Output: 4

//Example :1 Traditional for loop
for(let i=0; i<emplName.length; i++){
    console.log(emplName[i]); // Output: John Jane Doe
}
 // Difference between for...of and for...in loops -->  of used to iterate over values , in used to iterate over indexes
// Example 2: for...of loop --> simpler way to iterate over arrays
for(let fruit of fruits){
    console.log(fruit); // Output: Apple Banana Cherry
}

// Example 3: forEach method
numbers.forEach((num) => {
    console.log(num); // Output: 1 2 3 4 5
});

// Example 4: for...in loop --> not recommended for arrays . It works but not the best practice
for(let index in fruits){
    console.log(fruits[index]); // Output: Apple Banana Cherry
}


// Example 5: Passing an array to a function

// search an element in an array using function
function searchElement(arr: number[], target: number): boolean {
    for (let num of arr) {  
        if (num === target) {
            return true;
        }
    }
    return false;
}

let numArray: number[] = [10, 20, 30, 40, 50];
console.log(searchElement(numArray, 30)); // Output: true
console.log(searchElement(numArray, 60)); // Output: false 

//Example 6: Function will return an array
function getStringInUpperCase(arr: string[]): string[] {
    let upperCaseArr: string[] = [];
    for (let str of arr) {
        upperCaseArr.push(str.toUpperCase());
    }
    return upperCaseArr;
}

let lowerCaseArray: string[] = ['apple', 'banana', 'cherry'];
let upperCaseArray: string[] = getStringInUpperCase(lowerCaseArray);
console.log(upperCaseArray); // Output: [ 'APPLE', 'BANANA', 'CHERRY' ]