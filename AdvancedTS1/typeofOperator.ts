// This code demonstrates the typeof operator, which is a built-in JavaScript/TypeScript 
// tool used to inspect the data type of a variable at runtime (while the code is actually running).

// The below example, we use the type any. While any turns off TypeScript's strict checking, 
// the typeof operator still allows the code to "figure out" what it's dealing with.


// 1. THE LOGGING FUNCTION
// We use 'any' so this function can take literally anything as input.
function displayType(value: any): void {
    console.log("Value: " + value);
    
    // 2. THE TYPEOF OPERATOR
    // This returns a string representing the type (e.g., "string", "number").
    console.log("Type: " + typeof value);
}  

// --- TEST CASES ---

// String check
displayType("Hello, World!"); 

// Number check
displayType(42); 

// Boolean check
displayType(true); 

// Object check
displayType({ name: "Alice", age: 30 }); 

// 3. THE "GOTCHAS" (Unexpected Results)
// In JavaScript, Arrays are technically a specialized type of Object.
displayType([1, 2, 3]); // Type: object

// This is a famous historical bug in JavaScript: null is not an object,
// but typeof null returns "object".
displayType(null);      // Type: object

// Undefined has its own type.
displayType(undefined); // Type: undefined