//Parent class

class Person{

    public name:string; // public property -- accessible anywhere
    protected age:number; // protected property -- accessible with in the class and its subclass
    private ssn:number; // private property -- accessible only with in the class

    constructor(name:string,age:number,ssn:number){
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

    displayInfo(){
        console.log("Name:", this.name);
        console.log("Age:",this.age);
        console.log("SSN:", this.ssn)
    }

}

//child class

class Employee extends Person{
    private employeeId:number;
     constructor(name:string,age:number,ssn:number,employeeId:number){
        super(name,age,ssn);
        this.employeeId=employeeId;
    }

    showEmployeeDetails(){
        console.log(this.name) // public accessible
        console.log(this.age) // protected accessible
       //  console.log(this.ssn);   Property 'ssn' is private and only accessible within class 'Person'.
       console.log(this.employeeId);
    }
}

let emp=new Employee("Robin",31,123,101);
emp.displayInfo()// Parent class method
emp.showEmployeeDetails(); // child class method
console.log(emp.name)