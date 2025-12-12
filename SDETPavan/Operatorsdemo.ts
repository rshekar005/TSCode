//Arithmetic Operators : It is used to perform arithmetic operations on numbers.
console.log("************** Arithmetic Operators: **************************");
let a:number=10;
let b:number=5;
let c:number=a+b;
console.log("Addition is: "+c);
let d:number=a-b;
console.log("Subtraction is: "+d);
let e:number=a*b;
console.log("Multiplication is: "+e);
let f:number=a/b;
console.log("Division is: "+f); 
let g:number=a%b;
console.log("Modulus is: "+g);


//Assignment Operators : It is used to assign values to variables.
console.log("************** Assignment Operators: **************************");
let x:number=10; //assign 10 to x
x+=5; //x=x+5
console.log("x after +=5: "+x);
x-=3; //x=x-3
console.log("x after -=3: "+x);
x*=2; //x=x*2
console.log("x after *=2: "+x);
x/=4; //x=x/4
console.log("x after /=4: "+x);
x%=3; //x=x%3
console.log("x after %=3: "+x);


//Relational Operators : It is used to compare two values and return a boolean result.
console.log("************** Relational Operators: **************************");
let p:number=10;
let q:number=5;
console.log("Is p greater than q? "+(p>q));
console.log("Is p less than q? "+(p<q));
console.log("Is p equal to q? "+(p==q));
console.log("Is p not equal to q? "+(p!=q));
console.log("Is p greater than or equal to q? "+(p>=q));
console.log("Is p less than or equal to q? "+(p<=q));
console.log("Is p strictly equal to q? "+(p===q)); //strict equality checks value and type
console.log("Is p strictly not equal to q? "+(p!==q)); //strict inequality checks value and type

// Difference between == (equality) and === (strict equality) operators
let number1:any=10;
let number2:any="10";
console.log("Using == operator: "+(number1==number2)); //true because values are equal after type coercion
console.log("Using === operator: "+(number1===number2)); //false because types are different


//Logical Operators : It is used to combine multiple boolean expressions. Returns a boolean result.
console.log("************** Logical Operators: **************************");
let isAdult:boolean=true;
let hasTicket:boolean=false;
console.log("Is adult and has ticket? "+(isAdult && hasTicket));
console.log("Is adult or has ticket? "+(isAdult || hasTicket));
console.log("Is not adult? "+(!isAdult));   


//combination of relational and logical operators
let age1:number=20;
let hasID:boolean=true;
console.log("Is eligible to enter the club? "+((age1>=18) && hasID));
console.log("Is eligible for discount? "+((age1<18) || hasID));


//Increment and Decrement Operators : It is used to increase or decrease the value of a variable by 1.
console.log("************** Increment and Decrement Operators: **************************");
let count:number=10;
console.log("Initial count: "+count);
count++; //increment by 1
console.log("Count after increment: "+count);//postfix increment 11
count--;
console.log("Count after decrement: "+count);//prefix   decrement 10
++count; //prefix increment
console.log("Count after prefix increment: "+count);//11
--count;    
console.log("Count after prefix decrement: "+count);//10

//Difference between postfix and prefix increment/decrement
let numA:number=5;
let numB:number=5;
let postIncrementResult:number=numA++; //postfix increment
let preIncrementResult:number=++numB; //prefix increment
console.log("Postfix Increment Result: "+postIncrementResult); //5
console.log("Value of numA after postfix increment: "+numA); //6
console.log("Prefix Increment Result: "+preIncrementResult); //6
console.log("Value of numB after prefix increment: "+numB); //6 
//Similarly for decrement operator


//Ternary Operator : It is a shorthand for if-else statement. It takes three operands: a condition, a value if true, and a value if false.
console.log("************** Ternary Operator: **************************");
let age_1:number=18;
let eligibility:string=(age_1>=18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Voting Eligibility: "+eligibility);

