// 1. THE ASYNC PROMISE FUNCTION
// The 'async' keyword ensures this function always returns a Promise.
// Even if you returned a simple string, TS would wrap it in a Promise.
async function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        // setTimeout simulates an external task (like a Canvas API call)
        setTimeout(() => { 
            const data = "Data fetched successfully!";
            // resolve() marks the Promise as "Fulfilled" and sends the data back
            resolve(data);
        }, 4000); // 4-second "artificial" wait
    });
}

// 2. THE CONSUMER FUNCTION
// We use 'async' here so we can use the 'await' keyword inside.
async function displayData() {
    // try...catch is the standard way to handle errors in Async/Await
    try {
        console.log("Async begins: Waiting for data...");

        // AWAIT: This is the magic. The code "pauses" here for 4 seconds.
        // It doesn't block the whole program, just this specific function.
        // Once the Promise resolves, 'result' gets the string value.
        const result = await fetchData(); 
        
        console.log(result); // Output: Data fetched successfully!

    } catch (error) {
        // If the Promise called reject() instead of resolve(), we end up here.
        console.error("Error fetching data: " + error);

    } finally {
        // This runs regardless of success or failure. 
        // Best for: closing files, stopping loaders, or logging completion.
        console.log("Fetch operation completed.");
    }
}

// 3. EXECUTION


console.log("This runs immediately, without waiting for the data!");
displayData(); // We call the async function, which starts the whole process.
console.log("This also runs immediately, demonstrating non-blocking behavior!");
console.log("Even this runs right away, while the data is still being fetched!");
