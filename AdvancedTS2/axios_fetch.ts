import axios from 'axios';

// 1. DATA MODELING (Interface)
// This tells TypeScript exactly what fields to expect from the API.
// If the API returns 'email_address' instead of 'email', TS will warn you.
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// 2. ASYNC FUNCTION WITH AXIOS
async function fetchUserData(userId: number): Promise<User> {
    try {
        // axios.get<User> tells Axios to cast the response data into our User shape.
        const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        // Return only the 'data' property from the Axios response object
        return response.data;
    } catch (error) {
        // We re-throw the error so the calling code knows it failed
        throw new Error("Error fetching user data: " + error);
    } finally {
        // Always runs, perfect for logging or stopping a 'loading' state
        console.log("Fetch operation completed.");
    }
}

// 3. EXECUTION AND ASYNC DEMONSTRATION
fetchUserData(2)
    .then(user => {
        // This runs only AFTER the server responds (usually takes a few hundred ms)
        console.log("User Data:");  
        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Username:", user.username);
        console.log("Email:", user.email);
    })
    .catch(error => {
        console.error(error.message);
    });

// 4. NON-BLOCKING NATURE
// These will actually print BEFORE the "User Data" because the code above 
// is waiting for the internet, while these are instant.
console.log("These logs run immediately, without waiting for the API response!");
console.log("This demonstrates that the fetchUserData function is non-blocking.");