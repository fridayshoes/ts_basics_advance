// 1. DEFINE THE TYPE (The Template)
// This tells TypeScript exactly what an 'Employee' must look like.
type Employee = {         
    name: string;
    age: number;
    // Note: 'string[]' means an array of strings (e.g., ["Java", "React"])
    // Your original code used 'string', which treats all skills as one long sentence.
    skills: string[]; 
};

// 2. INITIALIZE INDIVIDUAL OBJECTS
// We use the 'Employee' type to ensure these records are consistent.

let employee1: Employee = {
    name: "David",
    age: 42,
    // Represented as an array for better data manipulation
    skills: ["JavaScript", "TypeScript", "React", "Python"] 
};

let employee2: Employee = {
    name: "Ekta",
    age: 28,
    skills: ["Comm Skills", "Team Management", "Leadership"]
};

let employee3: Employee = {
    name: "Alice Johnson",
    age: 35,
    skills: ["Java", "Spring Boot", "Microservices"]
};

// 3. OUTPUT THE DATA
// This prints the full objects to the console.
console.log(employee1); // David's record with his skills as an array
console.log(employee2); // Ekta's record with her skills as an array
console.log(employee3); // Alice's record with her skills as an array


// Bonus: Accessing a specific skill from David's skill set
console.log(employee1.name + "'s primary skill: " + employee1.skills[0]);