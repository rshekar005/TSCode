// Objects -- object contains properties and behaviors
// object contains variables and methods
// It is a collection of key and value pairs

// 1. using object type -- Directly define the values for variables

let employee1= {
    name:"John",
    age:30,
    jobTitle:"Developer",
    salary:50000,
    isFullTime:true,
    getDetails:function(){
       return `${this.name}, ${this.age} years old, works as a ${this.jobTitle} earning $${this.salary} per year. Full-time: ${this.isFullTime}`;
    }
}

console.log("Employee 1 Details: ", employee1.getDetails()); // Output: John, 30 years old, works as a Developer earning $50000 per year. Full-time: true
console.log("Employee 1 Name: ", employee1.name); // Output: John using dot notation to access property
console.log(typeof employee1); // Output: object
console.log(employee1["salary"]); // Output: 50000. Using bracket notation to access property

//Modify object properties
employee1.salary=55000;
console.log("Updated Employee 1 Salary: ", employee1.salary); // Output: 55000

// ================================================================================================

//2. Inline type object -- We also define the datatype of the keys. It means creating a structure for the object and then assigning values to it.
// Problem: Need to repeat the structure for every object
let student1: 
{   name:string, 
    age:number, 
    isEnrolled:boolean, 
    getInfo:()=>string
}= {
    name:"Alice",
    age:20,
    isEnrolled:true,
    getInfo:function(){
        return `${this.name}, ${this.age} years old, Enrolled: ${this.isEnrolled}`;
    }
}

console.log("Student 1 Info: ", student1.getInfo()); // Output: Alice, 20 years old, Enrolled: true

// ================================================================================================
// 3. using type alias -- create a custom type for object structure and reuse it for multiple objects. It avoids problem of repeating structure
 
type Product={
    productName:string,
    price:number,
    inStock:boolean,
    getProductDetails:()=>string
}

let book:Product={
    productName:"TypeScript Handbook",
    price:29.99,
    inStock:true,
    getProductDetails:function(){
        return `${this.productName} costs $${this.price}. In stock: ${this.inStock}`;
    }
}

console.log("Product Details: ", book.getProductDetails()); // Output: TypeScript Handbook costs $29.99. In stock: true

let laptop:Product={   
    productName:"Laptop",
    price:999.99,
    inStock:false,
    getProductDetails:function(){
        return `${this.productName} costs $${this.price}. In stock: ${this.inStock}`;
    }
}   

console.log("Product Details: ", laptop.getProductDetails()); // Output: Laptop costs $999.99. In stock: false

// Intersection Type -- combine multiple types into one. It allows an object to have properties from multiple types.

type Person={
    name:string,
    age:number
}
type EmployeeDetails={
    employeeId:number,
    department:string
}

type EmployeePerson=Person & EmployeeDetails; // Intersection type combining Person and EmployeeDetails

let empPerson:EmployeePerson={
    name:"Bob",
    age:28,
    employeeId:101,
    department:"HR"
}

console.log("Employee Person Details: ", empPerson); // Output: { name: 'Bob', age: 28, employeeId: 101, department: 'HR' }

// ================================================================================================
// 4. Using class -- It is a blueprint for creating objects with predefined properties and methods. Classes support features like inheritance, encapsulation, and polymorphism.

class Person1{
    firstname3:string;
    lastname3:string;
    age3:number;

    constructor(firstname3:string, lastname3:string, age3:number){
        this.firstname3=firstname3;
        this.lastname3=lastname3;
        this.age3=age3;
    }
    getFullName():string{
        return `${this.firstname3} ${this.lastname3}`;
    }
   
    getDetails():string{
        return `Name: ${this.getFullName()}, Age: ${this.age3}`;
    }
}

const p1=new Person1("Pavan","Kalyan",25);
const p2=new Person1("Ravi","Teja",30);

console.log("Person 1 Full Name: ", p1.getFullName()); // Output: Pavan Kalyan
console.log("Person 2 Details: ", p2.getDetails()); // Output: Name: Ravi Teja, Age: 30