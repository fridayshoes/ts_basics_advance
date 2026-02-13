// 1. You MUST keep the definition of the function you are calling!
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched successfully!";
            resolve(data);
        }, 4000);
    });
}

// 2. THE ASYNC FUNCTION
async function getMyData() {
    try {
        console.log("Fetching started...");

        // This works now because 'fetchData' is defined above
        const result: string = await fetchData(); 

        console.log(result); 

    } catch (error) {
        console.error("Caught an error:", error);

    } finally {
        console.log("Fetch operation completed.");
    }
}

// 3. EXECUTE
getMyData();