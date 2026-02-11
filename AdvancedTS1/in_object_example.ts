// The in operator is a fundamental tool in JavaScript and TypeScript for 
// existence checking. While typeof checks the kind of data, in checks for the 
// presence of a specific key (property name) within an object.


// 1. DATA STRUCTURE DEFINITION
type Records = {
    name: string;
    age: number;
    // The '?' means this property is OPTIONAL. 
    // It might exist, or it might be undefined.
    department?: string;
    service_length: number;
};              

// 2. THE UTILITY FUNCTION
// This function takes an object and a string, then returns a true/false answer.
function hasProperty(obj: any, property: string): boolean {
    // The 'in' operator checks the object's keys.
    // Logic: "Does the string 'property' exist as a key inside 'obj'?"
    return property in obj;
}  

// 3. OBJECT INITIALIZATION
const record: Records = { 
    name: "Alice", 
    age: 30, 
    department: "HR",
    service_length: 5
};

// 4. TESTING THE OPERATOR
console.log(hasProperty(record, "name"));       // true (Key exists)
console.log(hasProperty(record, "age"));        // true (Key exists)
console.log(hasProperty(record, "address"));    // false (Key does NOT exist in the object)
console.log(hasProperty(record, "service_length")); // true (Key exists, even if it's optional)

// Even if a property is optional in the Type, 
// 'in' checks if it is actually present in this specific instance.
console.log(hasProperty(record, "department")); // true