/*
  1. class Student with the following properties and methods:
     - Properties:
       - name: string
         - studentId: number (readonly)
         - email?: string (optional)
         - schoolName: string (static)
        - Methods:
         - displayDetails(): void
            - changeSchoolName(newName: string): void (static)
    2. Create instances of the Student class and demonstrate the usage of properties and methods.

    Static: A static property or method belongs to the class itself rather than to any specific instance of the class. It can be accessed without creating an instance of the class.

*/
class Student {
    name: string;
    readonly studentId: number;// Readonly property (can be assigned only during declaration or in constructor. Only accessible for reading outside the class)
    email?: string; // Optional property (may or may not be present)
    static schoolName: string="ABC High School" // Static property (belongs to the class itself rather than to any specific instance)
    constructor(id:number, name: string, email?: string) {
        this.studentId = id;
        this.name = name;
        this.email = email;
    }

    displayDetails = (): void => {
        console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Email: ${this.email ? this.email : 'Email is not provided'}`);
        console.log(`School Name: ${Student.schoolName}`);
    }
    static changeSchoolName(newName: string): void {
        this.schoolName = newName;
    }
}

let student1 = new Student(101, "Alice", "alice@example.com");
student1.displayDetails();
//student1.studentId=102; // Error: Cannot assign to 'studentId' because it is a read-only property

let student2 = new Student(102, "Bob");
student2.displayDetails(); // Email is not provided

//Display student details after changing static property
Student.changeSchoolName("XYZ International School");
student1.displayDetails();
student2.displayDetails();
