// 1. TYPING THE PROMISE
// We tell TypeScript this function returns a Promise that will eventually 
// hold a 'string'. This provides autocomplete and safety later.
function fetchData(): Promise<string> {
    // The Promise constructor takes an 'executor' function with two callbacks:
    // resolve -> call this when the work is done successfully
    // reject  -> call this if something goes wrong
    return new Promise((resolve, reject) => {
        
        // Simulating a network delay (2000ms = 2 seconds)
        setTimeout(() => {
            const data = "Data fetched successfully!";
            
            // Fulfilling the promise with our string data
            resolve(data); 
        }, 2000);
    });
}

// 2. CONSUMING THE PROMISE
fetchData()
    // .then() runs ONLY if resolve() was called inside the promise.
    // TypeScript knows 'result' is a string because of our return type above.
    .then((result: string) => {
        console.log(result); // Output after 2s: Data fetched successfully!
    })
    
    // .catch() runs ONLY if reject() was called (e.g., if a network error happened).
    .catch((error: any) => {
        console.error("Error fetching data: " + error);
    })
    
    // .finally() runs no matter what (success OR failure).
    // Perfect for hiding loading spinners or closing database connections.
    .finally(() => {
        console.log("Fetch operation completed.");
    });