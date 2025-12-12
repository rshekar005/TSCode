//If condition: It is used to execute a block of code if a specified condition is true.

let age_2:number=20;

if(age_2>=18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}


// Example: Check if a number is positive, negative or zero
let number_3:number=-5;
if(number_3>0){
    console.log(number_3+" is a positive number.");
}else if(number_3<0){
    console.log(number_3+" is a negative number.");
}else{
    console.log("Number is zero.");
}

// Example 3: Find the largest of three numbers
let a1:number=10;    
let b1:number=20;
let c1:number=15;
if(a1>=b1 && a1>=c1){
    console.log(a1+" is the largest number.");
}else if(b1>=a1 && b1>=c1){
    console.log(b1+" is the largest number.");
}else{
    console.log(c1+" is the largest number.");
}

// Example 4: Check if a year is a leap year
let year1:number=2025;
if((year1%4==0 && year1%100!=0) || (year1%400==0)){
    console.log(year1+" is a leap year.");
}else{
    console.log(year1+" is not a leap year.");
}

//Example 5: Print number is even or odd
let num4:number=7;
if(num4%2==0){
    console.log(`${num4} is an even number.`);
}else{
    console.log(`${num4} is an odd number.`); // Use of backtick is shown here
}


// Nested if else: It is used to check multiple conditions by nesting if-else statements within each other.
let marks:number=74.99;
if(marks>=90){
    console.log("Grade A");
}else{
    if(marks>=75){
        console.log("Grade B");
    }else{
        if(marks>=60){
            console.log("Grade C");
        }else{
            console.log("Grade D");
        }
    }
}

// Browser selection using nested if-else
let browser:string="Chrome";
if(browser==="Chrome"){
    console.log("You are using Chrome browser.");
}else{
    if(browser==="Firefox"){
        console.log("You are using Firefox browser.");
    }else{          
        if(browser==="Edge"){
            console.log("You are using Edge browser.");
        }
    }
}

//Switch case: It is used to execute one block of code among multiple options based on the value of a variable or expression.
let day:number=3;   
switch(day){  //Expression
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
       break
    case 4:
        console.log("Thursday");
       break
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Example: Simple calculator using switch case
let num_A:number=10;
let num_B:number=5;
let operator:string="+";
let result:number;
switch(operator){
    case "+":
        result=num_A+num_B;
        console.log(result);
        break;
    case "-":
        result=num_A-num_B;
        console.log(result);
        break;
    case "*":
        result=num_A*num_B;
        console.log(result);
        break;
    case "/":
        result=num_A/num_B;
        console.log(result);
        break;
    default:
        console.log("Invalid operator");
        break;
}