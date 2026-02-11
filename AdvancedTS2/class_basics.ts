// 1. THE BLUEPRINT (The Class)
class Person {
    // PROPERTIES (Fields)
    // We must declare the types of the data this class will hold.
    name: string;
    age: number;  

    // 2. THE CONSTRUCTOR (The Factory Machine)
    // This is a special function that runs only ONCE—when you type 'new Person(...)'.
    // It takes the raw data and assigns it to the properties using 'this'.
    constructor(name: string, age: number) {
        this.name = name; // 'this.name' refers to the property above
        this.age = age;   // 'age' refers to the argument passed in
    }  

    // 3. THE METHOD (The Behavior)
    // Functions inside a class are called methods. 
    // They define what the 'Person' can DO.
    displayInfo(): void {
        // We use template literals (backticks) to inject 'this' properties into a string
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// 4. THE INSTANTIATION (Creating the Object)
// 'person1' is an "Instance" of the Person class.
const person1 = new Person("Alice", 30);

// 5. CALLING THE METHOD
person1.displayInfo(); // Output: Name: Alice, Age: 30