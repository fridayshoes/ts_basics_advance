// --- PART 1: A SIMPLE FOR-LOOP ---

// 1. Initialization: let i = 1 (Starts the counter at 1)
// 2. Condition: i <= 10 (Keep going as long as i is 10 or less)
// 3. Final Expression: i++ (Add 1 to i after every loop)
for (let i = 1; i <= 10; i++) {
    // This runs 10 times, printing the current value of i
    console.log(i); 
}

// --- PART 2: DEFINING AND CALLING A FUNCTION ---

// We define the logic here, but it DOES NOT run yet.
// Functions are like recipes; they stay on the page until you "cook" them.
function printEvenNumbers() {
    console.log("Even numbers from 1 to 20:");

    // This loop runs 20 times total
    for (let i = 1; i <= 20; i++) {
        
        // The Modulo operator (%) checks the remainder of division.
        // If i divided by 2 has a remainder of 0, the number is even.
        if (i % 2 === 0) {
            console.log(i); // Only prints if the 'if' condition is true
        }
    }
}

// 4. Execution: This line "calls" the function.
// The computer jumps back up to line 12, runs the code inside, 
// and then comes back here when finished.
printEvenNumbers(); // Output: Even numbers from 1 to 20: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
