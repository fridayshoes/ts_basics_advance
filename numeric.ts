// Define a function named 'dispNum2'.
// Unlike plain JavaScript, we specify that 'name' MUST be a number.
// The ': number' after the parentheses tells TS the function MUST return a number.
function dispNum2(name: number): number {
    // If you tried to return a string here, TypeScript would show an error.
    return name + 10;
}

// Declare a constant 'tname2' and assign it the number 10.
// TypeScript "infers" that this is a number because you assigned it 10.
const tname2 = 10;

// Call the function and pass 'tname2' as the argument.
// Everything matches (number in -> number out), so this works perfectly.
console.log(dispNum2(tname2)); // Output: 20