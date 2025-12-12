// String : A string is a sequence of characters used to represent text. 
// In TypeScript, strings can be defined using single quotes, double quotes, or backticks (for template literals).

//backticks : when we try to use a string variable inside another string variable then we have to use backticks

// Example of defining strings using different quotes
let singleQuoteString: string = 'Hello, World!';
let doubleQuoteString: string = "Hello, TypeScript!";
let templateLiteralString: string = `Hello, Template Literals!`;

// When to use backticks
let name1: string = 'Rajashekar';
let greeting: string = `Hello, ${name1}! Welcome to TypeScript.`;
console.log(greeting);

let num_1:number=10;
console.log(`The value of num_1 is: ${num_1}`);

// String methods
let sampleString: string = "  TypeScript is awesome!  ";

// Length of the string
console.log(`Length: ${sampleString.length}`); // Output: 25
// Convert to uppercase
console.log(`Uppercase: ${sampleString.toUpperCase()}`);    // Output: '  TYPESCRIPT IS AWESOME!  '
// Convert to lowercase
console.log(`Lowercase: ${sampleString.toLowerCase()}`); // Output: '  typescript is awesome!  '
// Trim whitespace
console.log(`Trimmed: '${sampleString.trim()}'`);   // Output: 'TypeScript is awesome!'
// Substring : ending index is not included
console.log(`Substring (0, 10): '${sampleString.substring(0, 10)}'`);// Output: 'TypeScript'
// Replace
console.log(`Replace 'awesome' with 'great': '${sampleString.replace('awesome', 'great')}'`); // Output: '  TypeScript is great!  '
// Split
let words: string[] = sampleString.trim().split(' ');
console.log(`Split into words:`, words); // Output: ['TypeScript', 'is', 'awesome!']
// Index of a substring
console.log(`Index of 'is': ${sampleString.indexOf('is')}`); // Output: 12
// Char at a specific index
console.log(`Character at index 5: '${sampleString.charAt(5)}'`); // Output: 'S'
// Includes
console.log(`Includes 'awesome': ${sampleString.includes('awesome')}`); // Output: true
// Starts with
console.log(`Starts with '  Type': ${sampleString.startsWith('  Type')}`); // Output: true
// Ends with
console.log(`Ends with '  ': ${sampleString.endsWith('  ')}`); // Output: true
// Repeat
console.log(`Repeat 2 times: '${sampleString.trim().repeat(2)}'`); // Output: 'TypeScript is awesome!TypeScript is awesome!'
// Char code at a specific index
console.log(`Char code at index 0: ${sampleString.charCodeAt(0)}`); // Output: 32 (ASCII code for space)
// concat
let additionalString: string = " Let's learn more.";
console.log(`Concatenated String: '${sampleString.trim().concat(additionalString)}'`); // Output: 'TypeScript is awesome! Let's learn more.'
// immutable
let immutableString: string = "Immutable";
immutableString[0] = "i"; // This will not change the string
console.log(`Immutable String: '${immutableString}'`); // Output: 'Immutable'