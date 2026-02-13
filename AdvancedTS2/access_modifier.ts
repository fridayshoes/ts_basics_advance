// 1. THE CLASS DEFINITION WITH ACCESS LEVELS
class Person3 {      
    // PUBLIC: The default level. Anyone can see or change this from outside the class.
    public name: string; 

    // PRIVATE: The "Strict" level. Only code INSIDE this { curly braces } can touch it.
    // Even an object created from this class cannot access it directly.
    private age: number; 

    // PROTECTED: The "Family" level. This is private to the outside world, 
    // but Child classes (subclasses that 'extend' this one) are allowed to use it.
    protected department: string; 

    constructor(name: string, age: number, department: string) {
        this.name = name;          
        this.age = age;
        this.department = department;
    }

    // This method is inside the class, so it can see all three (Public, Private, Protected).
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`);
    }
}

// 2. EXTERNAL ACCESS CHECK
const person3 = new Person3("Alice", 30, "HR");

console.log(person3.name);       // ✅ WORKS: name is public.

// console.log(person3.age);     // ❌ ERROR: TypeScript stops you. Only Person3 knows its age.

// console.log(person3.department); // ❌ ERROR: You aren't a subclass, so you are blocked.

person3.displayInfo();           // ✅ WORKS: The method is public, even though it reads private data internally.




// --- THE CHILD CLASS (Subclass) ---
// 'extends' creates the inheritance link.
class Employee3 extends Person3 {
    constructor(name: string, age: number, department: string) {
        // 'super' calls the Parent's constructor. 
        // This passes the data up to the Person3 part of the object.
        super(name, age, department);
    }

    displayEmployeeInfo(): void {
        // 1. PUBLIC: Accessible (this.name)
        // 2. PROTECTED: Accessible (this.department) because we are in a subclass.
        // 3. PRIVATE: NOT accessible (this.age). Even though Employee3 is a Person3, 
        //    the 'age' property is strictly locked inside the parent's logic.
        console.log(`Employee Name: ${this.name}, Department: ${this.department}`);
    }
}

// --- EXECUTION & TESTING ---
const employee4 = new Employee3("Bob", 25, "IT");

console.log(employee4.name); // ✅ Public: Works everywhere.

// console.log(employee4.age); 
// ❌ ERROR: Private. Even the instance 'employee4' cannot touch this directly.

// console.log(employee4.department); 
// ❌ ERROR: Protected. While the internal method 'displayEmployeeInfo' can see it,
//    the outside world (external code) cannot.

employee4.displayInfo();         // ✅ Works: Calling a method inherited from the parent.
employee4.displayEmployeeInfo(); // ✅ Works: Calling the subclass's own method.