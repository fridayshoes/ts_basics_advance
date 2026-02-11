// Union types are one of TypeScript's most powerful features. They allow a variable or 
// parameter to be one of several types, giving you flexibility 
// while still maintaining strict type safety.

// Think of it as an "OR" relationship for data types.


// 1. THE UNION TYPE DEFINITION
// The pipe symbol '|' acts as 'OR'.
// (value: string | number) tells TypeScript: 
// "I will accept a string OR a number, but nothing else (like a boolean)."
// ': void' means this function performs an action but doesn't 'return' a value.
function display(value: string | number): void {
    
    // 2. CONCATENATION
    // JavaScript/TypeScript is smart enough to handle the '+' operator 
    // for both strings and numbers here, turning the number into text for the log.
    console.log("Value: " + value);
}

// 3. VALID CALLS
// This works because "Hello, World!" is a string.
display("Hello, World!"); 

// This also works because 42 is a number.
display(42); 

// 4. INVALID CALL (Example)
// When you defined your function as display(value: string | number), 
// you created a strict contract. You told the computer: "I only know how to handle 
// text or math." When you try to pass true (a boolean), you are breaking that contract.

//display(true); // ERROR: Argument of type 'boolean' is not assignable to 'string | number'.