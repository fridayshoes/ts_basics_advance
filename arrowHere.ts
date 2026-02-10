// 1. ANATOMY OF AN ARROW FUNCTION
// 'const' means the function definition won't change.
// '(limit: number)' defines our input parameter and its type.
// '=>' is the arrow that points to the function body.
// ': any' means the function can return anything (though here it returns nothing).
const printEvenNumbers2 = (limit: number): any => {
    
    // 2. INITIALIZATION
    // We create a "counter" variable outside the loop.
    let i = 1;      

    // 3. THE WHILE LOOP
    // This will keep running as long as the condition (i <= limit) is TRUE.
    while (i <= limit) {
        
        // 4. THE LOGIC (EVEN CHECK)
        // Checks if the current number 'i' is divisible by 3 with no remainder.
        if (i % 3 === 0) {
            console.log(i);
        }  

        // 5. THE INCREMENT (CRITICAL STEP)
        // We manually add 1 to 'i'. 
        // WARNING: If you forget this line, 'i' stays 1 forever, 
        // and you get an "Infinite Loop" that crashes your browser/terminal!
        i++;
    }          
}

// 6. EXECUTION
// We call the function and pass '10' as the limit.
console.log("Numbers divisible by 3 from 1 to 30 :");
printEvenNumbers2(30);