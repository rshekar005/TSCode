/**
 * Tuple type definition for an array with fixed number of elements of specified types.
 * It helps to represent a collection of values of different types.
 * Here, 'person' is a tuple with two elements: string and number.
 */
let person: [string, number] = ["Alice", 30]; // Fixed array with fixed data type it means in first index only string allowed and in second index only number allowed. 

console.log(person[0]);
console.log(person[1]);

// Example 2: Tuple with mutliple values
let user: [number, string, boolean,number,string] = [1, "John Doe", true, 25,"Developer"]
console.log(user);

// Example 3: Iterating over tuple elements using a traditional for loop
for(let i=0; i<user.length; i++){
    console.log(user[i]);
}

for(let element of user){  // of loop used to iterate over values
    console.log(element);
}

for(let element in user){ // in loop used to iterate over indexes
    console.log(user[element]);
}


// Exapmle 4: Tuple Array
let  students: [number, string][] = [
    [1, "Alice"],
    [2, "Bob"],
    [3, "Charlie"]
];

console.log(students.length); // Output: 3

console.log(students[0]); // Output: [1, "Alice"]
console.log(students[2][1]); // Output: "charlie"