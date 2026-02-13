// 1. THE CLASS STRUCTURE
class Employee2 {
    // We use 'private' so this variable CANNOT be accessed outside the class.
    // The underscore (_) is a convention meaning "this is an internal variable."
    private _name: string;

    constructor(name: string) {
        // Initializes the internal variable
        this._name = name; // this._name is the private variable, 'name' is the constructor argument
    }  

    // 2. THE GETTER
    // Runs automatically when you try to READ 'employeeObj.name'
    get name(): string {
        console.log("Getter called");
        return this._name;
    }  

    // 3. THE SETTER
    // Runs automatically when you try to ASSIGN a value: 'employeeObj.name = "..." '
    set name(newName: string) {
        console.log("Setter called with value:", newName);
        
        // VALIDATION: This is the "Security Guard" logic.
        // It prevents the name from being set to an empty string.
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Name cannot be empty.");
        }
    }
}  

// 4. EXECUTION
// We start with an empty string (the constructor allows it here)
const employeeObj = new Employee2("");

// The Setter is triggered here
employeeObj.name = "Alice"; 

// The Getter is triggered here
console.log(employeeObj.name); 

// Updating the value triggers the Setter again
employeeObj.name = "Bob"; 
console.log(employeeObj.name);