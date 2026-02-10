// --- PART 1: ARITHMETIC OPERATORS ---
let a: number = 15;
let b: number = 5;  

// Addition: 15 + 5 = 20. (Your previous comment said 10 + 5)
console.log("Addition: " + (a + b)); 

// Subtraction: 15 - 5 = 10.
console.log("Subtraction: " + (a - b));

// Multiplication: 15 * 5 = 75.
console.log("Multiplication: " + (a * b));

// Division: 15 / 5 = 3.
console.log("Division: " + (a / b));

// Modulus: Returns the remainder. 
// Since 15 divided by 5 is exactly 3 with 0 left over, the result is 0.
console.log("Modulus: " + (a % b)); 


// --- PART 2: THE EQUALITY TRAP ---
let x: number = 10;
let y: any = "10";     

// Loose Equality (==): JS performs "Type Coercion."
// It converts the string "10" into a number 10 behind the scenes to compare.
console.log("Using == : " + (x == y));  // true

// Strict Equality (===): No type conversion allowed.
// One is a 'number', the other is a 'string'. 
// Even though they look the same, they are different types.
console.log("Using === : " + (x === y)); // false