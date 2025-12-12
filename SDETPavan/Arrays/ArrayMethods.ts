let numbers1: number[]= [1,2,3,4,5];
let names1: string[]= ['Pavan','Kalyan','Ravi'];

console.log('Numbers Array:', numbers1); // Output: Numbers Array: [ 1, 2, 3, 4, 5 ]
console.log('Names Array:', names1); // Output: Names Array: [ 'Pavan', 'Kalyan', 'Ravi' ]

//Array Attribute
console.log(numbers1.length); // Output: 5  length attribute gives the number of elements in the array
console.log(names1.length); // Output: 3

//Array Methods

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
numbers1.push(6,7 ); // Adds 6 at the end of the array
console.log('After push:', numbers1); // Output: After push: [ 1, 2, 3, 4, 5, 6, 7 ]

//2. pop() - Removes the last element from an array and returns that element.
let lastElement = numbers1.pop(); // Removes the last element from the array
console.log('Popped Element:', lastElement); // Output: Popped Element: 7
console.log('After pop:', numbers1); // Output: After pop: [ 1, 2, 3, 4, 5,6 ]

//3. shift() - Removes the first element from an array and returns that element.
numbers1.shift(); // Removes the first element from the array
console.log('After shift:', numbers1); // Output: After shift: [ 2, 3, 4, 5, 6 ]

//4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
numbers1.unshift(0,1); // Adds 0, 1 at the beginning of the array
console.log('After unshift:', numbers1); // Output: After unshift: [ 0, 1, 2, 3, 4, 5 , 6 ]

//5. concat() - Merges two or more arrays and returns a new array.
let moreNumbers = [7,8,9];
let combinedArray = numbers1.concat(moreNumbers);
console.log('After concat:', combinedArray); // Output: After concat: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let multipleArray = combinedArray.concat([10,11,12],[100,200]); // Merges multiple arrays
console.log('After concat multiple arrays:', multipleArray); // Output: After concat multiple arrays: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 100, 200 ]

let morenames = ['Ramu','Somu'];
let combinedNames = names1.concat(morenames);
console.log('After concat:', combinedNames); // Output: After concat: [ 'Pavan', 'Kalyan', 'Ravi', 'Ramu', 'Somu' ]


//6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let slicedArray = multipleArray.slice(2,7);
console.log('After slice:', slicedArray); // Output: After slice: [ 2, 3, 4, 5, 6 ]

//7. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
multipleArray.splice(5,2, 50,60); // At index 5, remove 2 elements and add 50, 60
console.log('After splice:', multipleArray); // Output: After splice: [ 0, 1, 2, 3, 4, 50, 60, 7, 8, 9, 10, 11, 12, 100, 200 ]  

let fruits1: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

//Example 1: Removing elements
fruits1.splice(2, 1); // Removes 1 element at index 2
console.log('After splice remove:', fruits1); // Output: After splice remove: [ 'Apple', 'Banana', 'Date', 'Elderberry' ]

//Example 2: Replacing elements
fruits1.splice(1, 2, 'Blueberry', 'Cantaloupe'); // At index 1, remove 2 elements and add 'Blueberry', 'Cantaloupe'
console.log('After splice replace:', fruits1); // Output: After splice replace: [ 'Apple', 'Blueberry', 'Cantaloupe', 'Elderberry' ]

// Example 3: Adding elements without removing any elements
fruits1.splice(2, 0, 'Dragonfruit', 'Fig'); // At index 2, remove 0 elements and add 'Dragonfruit', 'Fig'
console.log('After splice add:', fruits1); // Output: After splice add: [ 'Apple', 'Blueberry', 'Dragonfruit', 'Fig', 'Cantaloupe', 'Elderberry' ]


//8. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits1.indexOf('Fig');
console.log('Index of Fig:', index); // Output: Index of Fig: 3 
let indexNotFound = fruits1.indexOf('Mango');
console.log('Index of Mango:', indexNotFound); // Output: Index of Mango: -1

let indexFrom = fruits1.indexOf('Cantaloupe', 3); // Search for 'Cantaloupe' starting from index 3
console.log('Index of Cantaloupe from index 3:', indexFrom); // Output: Index of Cantaloupe from index 3: 4


//9. includes() - Determines whether an array includes a certain element, returning true or false as appropriate.
let hasApple = fruits1.includes('Apple');
console.log('Includes Apple:', hasApple); // Output: Includes Apple: true
let hasMango = fruits1.includes('Mango');
console.log('Includes Mango:', hasMango); // Output: Includes Mango: false

//10. toString() - Returns a string representing the specified array and its elements. It converts array elements to strings and joins them with commas.
let fruitsString = fruits1.toString();
console.log('Fruits toString():', fruitsString); // Output: Fruits toString(): Apple,Blueberry,Dragonfruit,Fig,Cantaloupe,Elderberry

let nmyArray:string[]=['w','e','l','c','o','m','e'];
console.log("Original Array:", nmyArray); // Output: Original Array: [ 'w', 'e', 'l', 'c', 'o', 'm', 'e' ]
let arrayString = nmyArray.toString();
console.log("Array toString():", arrayString); // Output: Array toString(): w,e,l,c,o,m,e